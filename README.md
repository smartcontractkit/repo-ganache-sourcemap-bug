# repo-ganache-sourcemap-bug
A minimum viable bug reproduction demonstrating source map failure when ganache-core is imported

<!--- Provide a general summary of the issue in the Title above -->
With the current build, users who create a provider via 
```ts
import ganache from 'ganache-core'

const provider = ganache.provider()
```
will experience broken source maps if they're using jest/ts-jest.

This was triaged by removing the following lines/files:
- `build/ganache.core.node.js`
- any imports of `require("source-map-support/register")`.

Performing those two steps lead to successful lines being reported during test failures using jest.

## Expected Behavior
The expected behaviour is that if a consumer of `ganache-core` uses Jest/ts-jest, they will not experience mis-matched source lines on their own test failures.

## Current Behavior
Mismatched source lines on test failures using ts-jest unless 

## Possible Solution
Remove the following, or allow the consumer to opt out of them via an environment variable.
- `build/ganache.core.node.js`
- any imports of `require("source-map-support/register")`.

## Steps to Reproduce (for bugs)
1. Clone https://github.com/smartcontractkit/repo-ganache-sourcemap-bug
2. Run `yarn`
3. Run `yarn jest`
4. Observe source lines mismatch

Tracked at https://github.com/trufflesuite/ganache-core/issues/522
