import assert from 'node:assert/strict';
import { spawn, execFileSync } from 'node:child_process';
import { once } from 'node:events';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const locks = execFileSync('git', ['ls-files', '*package-lock.json'], { cwd: root, encoding: 'utf8' }).trim().split('\n');
assert.equal(locks.length, 10, 'Every example lockfile must be covered');
// Bind smoke servers to loopback and an OS-assigned port without editing lessons.
const preload = 'data:text/javascript,' + encodeURIComponent(`
  import net from 'node:net';
  const listen = net.Server.prototype.listen;
  net.Server.prototype.listen = function (...args) {
    this.once('listening', () => console.log('SMOKE_PORT=' + this.address().port));
    return listen.call(this, 0, '127.0.0.1', typeof args.at(-1) === 'function' ? args.at(-1) : undefined);
  };
`);

let requests = 0;
for (const lock of locks.filter(p => p.includes('/'))) {
  const directory = path.dirname(path.join(root, lock));
  const name = path.basename(directory);
  const entry = name.startsWith('3.4') ? 'solution2.js' : name.startsWith('3.2') || name.startsWith('3.3') ? 'index.js' : 'solution.js';
  const child = spawn(process.execPath, ['--import', preload, entry], { cwd: directory, stdio: ['ignore', 'pipe', 'pipe'] });
  let stdout = '', stderr = '';
  child.stdout.on('data', data => { stdout += data; });
  child.stderr.on('data', data => { stderr += data; });
  try {
    const port = await new Promise((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error(`Startup timeout: ${name}: ${stderr}`)), 10000);
      const fail = code => { clearTimeout(timeout); reject(new Error(`Startup exit ${code}: ${name}: ${stderr}`)); };
      child.once('exit', fail);
      const observe = () => {
        const match = stdout.match(/SMOKE_PORT=(\d+)/);
        if (match) { clearTimeout(timeout); child.off('exit', fail); resolve(Number(match[1])); }
      };
      child.stdout.on('data', observe);
      observe();
    });
    async function request(route, method = 'GET', expected = 200, body) {
      const response = await fetch(`http://127.0.0.1:${port}${route}`, {
        method, body, headers: body ? { 'content-type': 'application/x-www-form-urlencoded' } : {}, signal: AbortSignal.timeout(5000)
      });
      assert.equal(response.status, expected, `${name}: ${method} ${route}`);
      requests++;
      return response.text();
    }
    assert.ok((await request('/')).length > 0, `${name}: nonempty HTML`);
    await request('/missing-security-smoke-route', 'GET', 404);
    if (name.startsWith('3.2') || name.startsWith('4.3')) { await request('/about'); await request('/contact'); }
    if (name.startsWith('3.3')) {
      await request('/register', 'POST', 201);
      for (const method of ['PUT', 'PATCH', 'DELETE']) await request('/user/angela', method);
    }
    // The supplied view is intentionally a worksheet; verify its existing form and POST handling.
    if (name.startsWith('4.2')) assert.match(await request('/submit', 'POST', 200, 'fName=Jane&lName=Doe'), /name="fName"/);
    if (name.startsWith('4.4')) assert.ok((await request('/submit', 'POST', 200, '')).length > 0);
    if (name.startsWith('3.5')) await request('/check', 'POST', 200, 'password=wrong-smoke-value');
    console.log(`PASS ${name} (${entry})`);
  } finally {
    if (child.exitCode === null) { const exited = once(child, 'exit'); child.kill(); await exited; }
  }
}
console.log(`PASS: nine example servers, ${requests} HTTP checks including missing-route error paths`);
