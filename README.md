# TS Module Starter

A basic setup for a publish-ready package built in TypeScript. You can use it
either as a blueprint/outline, or just clone it, remove what you don't need, and
use it as a template.

## Overview

This is not intended to be a useful lib in itself, but rather provide a template
for building NPM packages that are ready to publish with TypeScript/React/etc.

This is about half-and-half on the opinionated front. Some of it is just basic
setup, but some other things (ESLint, Prettier, etc.) are set up for my own
preferences (but of course they can be tweaked as necessary).

Some of the features currently wired up are:

- Building/bundling for multiple targets (CommonJS, ES Modules, UMD) with `rollup`
- TypeScript/React compilation with `babel`
- Easy release management with `np`
- Testing with `jest`
- Linting with `eslint`
- Pre-commit hook for running `prettier` on staged files

## Improvements (TODO)

- Internal handling for styling (i.e. if you need to build a component lib
  with its own styles baked in)
- Add `react-styleguidist` (may require an additional Webpack setup if it
  cannot support Rollup)
