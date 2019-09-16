# TS Module Starter

Initial publish for local linking. There is nothing to see here!

## Overview

This is not intended to be a useful lib in itself, but rather provide a template
for building NPM packages that are ready to publish with TypeScript/React/etc.

This is about half-and-half on the opinionated front. Some of it is just basic
setup, but some other things (ESLint, Prettier, etc.) are set up to my own
preference, but of course they can be tweaked as necessary.

Some of the features currently wired up are:

- Building/bundling with `rollup` (currently no minification in the build
  process, because the assumption is that the lib/bundle will be used in
  another project which will handle production building)
- TypeScript/React compilation with `babel`
- Easy release management with `np`
- Testing with `jest`
- `eslint` for linting
- Pre-commit hook for running `prettier` on staged files

## Improvements (TODO)

- Internal handling for styling (i.e. if you need to build a component lib
  with its own styles baked in)
- Add `react-styleguidist` (may require an additional Webpack setup if it
  cannot support Rollup)
