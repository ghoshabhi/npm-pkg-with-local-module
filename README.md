### This is a sample app demonstrating an issue with using a package that has a local module as dependency

Interesting dependency:
```json
"dependencies": {
    "counter-ui": "file:./libs/counter-ui"
  },
  ```

Both `yarn` and `npm` allow using "local" modules. Local modules could be useful if, say for example, you have forked an unmaintained package and make minor updates to fix a bug for your use case.

However the problem starts when this package, that has dependency on a local module, is required by some other project.

This package is published here:
https://www.npmjs.com/package/npm-pkg-with-local-module

### Installing
```sh
yarn add npm-pkg-with-local-module
```
