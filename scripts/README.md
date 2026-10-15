# Example security checks

`node scripts/check-examples.mjs` starts the nine completed Express examples on temporary loopback ports, checks their routes and missing-route responses, and shuts them down. Install dependencies in each locked directory first. It uses the supplied solution files where index files are intentionally unfinished worksheets.

The security workflow installs and audits all ten tracked lockfiles, including the root lint tooling, then runs the route smoke check. Dependency updates stay within the existing manifest ranges. These checks preserve the course exercises; they do not certify the teaching examples as production-ready applications.
