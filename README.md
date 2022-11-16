<h1 align="center">
  <a href="https://micro-lc.io"><img src="https://micro-lc.github.io/micro-lc/img/logo-light.png" alt="micro-lc"></a>
</h1>

<p align="center">
    <a href="https://mia-platform.eu/?utm_source=referral&utm_medium=github&utm_campaign=micro-lc"><img src="https://img.shields.io/badge/Supported%20by-Mia--Platform-green?style=for-the-badge&link=https://mia-platform.eu/&color=DE0D92&labelColor=214147" alt="Mia-Platform" /></a>
</p>

## Introduction

micro-lc is an open source micro-frontend orchestrator for building flexible, multi-tenant frontend applications.
And [much more](https://micro-lc.github.io/micro-lc/docs)!

**Tip**: use the official **[playground](https://micro-lc.github.io/micro-lc/playground/)** to try micro-lc immediately.

An introduction about micro frontend and how micro-lc works:

<div align="center">
  <a href="https://www.youtube.com/watch?v=QumadjC2krU"><img src="https://img.youtube.com/vi/QumadjC2krU/0.jpg" alt="micro-lc introduction"></a>
</div>

## Installation

micro-lc is shipped as an ES module **CDN bundle** and can be imported in any HTML page. Moreover, a **dockerized 
webserver** is available on Docker Hub.

[Read the docs](https://micro-lc.github.io/micro-lc/docs/getting-started) to learn how you can use micro-lc in your
next project!

## Handle the repo

### Build

This repository is made of 5 subpackages plus the documentation package. The dependencies can be sketched as follows:

```
  `interfaces` `iconic`
         |      |
        `composer`
            |
      `orchestrator`
            |
         `layout`
```

to build the packages there's a script which can be invoked after install as

```shell
yarn initialize [OPTIONS]
```

where `OPTIONS` are

1. `-c` or `--cleanup`
2. one of the subpackages: `interfaces`, `iconic`, `composer`, `orchestrator`, and `layout` (default)

By using `cleanup` you require `initialize` to trash anything in the `dist`, `node_modules`, and `coverage` directories.
By choosing one subpackage, `initialize` will build up to that one.

To build the repository disregarding previous actions run:

```shell
yarn initialize --cleanup
```

### Shortcuts

Yarn allows to invoke scripts onto subpackages in a `workspaces` environment. Such commands might
become soon verbose since to build a subpackage the command would be like:

```shell
yarn workspace @micro-lc/orchestrator build
```

hence we enforced some shortcuts:

1. `workspace @micro-lc/interfaces` -> `i`
2. `workspace @micro-lc/iconic` -> `c`
3. `workspace @micro-lc/composer` -> `m`
4. `workspace @micro-lc/orchestrator` -> `o`
5. `workspace @micro-lc/layout` -> `l`

hence the command above would become:

```shell
yarn o build
```

also the documentation has a shortcut

6. `workspace @micro-lc/documentation` -> `d`

### Test

To run tests ensure some CommonJS to ESM conversion on dependencies by running

```shell
yarn prepare-test
```

then simply run

```shell
yarn test
```

or

```shell
yarn coverage
```

### Components Playground

`layout` is a webcomponents repository and provides a storybook environment.
Remind to build dependencies as prompted [before](#build) and then run:

```shell
yarn l storybook
```

## Contributing

We are thankful for any contributions from the community, read our [contributing guide](./CONTRIBUTING.md) to learn
about our development process, how to propose bugfixes and improvements, and how to build and test your changes to
micro-lc.

## Licence

micro-lc is [Apache 2.0 licensed](https://www.apache.org/licenses/LICENSE-2.0).
