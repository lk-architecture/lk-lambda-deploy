[![Build Status](https://travis-ci.org/lk-architecture/lk-lambda-deploy.svg?branch=master)](https://travis-ci.org/lk-architecture/lk-lambda-deploy)
[![Dependency Status](https://david-dm.org/lk-architecture/lk-lambda-deploy.svg)](https://david-dm.org/lk-architecture/lk-lambda-deploy)
[![devDependency Status](https://david-dm.org/lk-architecture/lk-lambda-deploy/dev-status.svg)](https://david-dm.org/lk-architecture/lk-lambda-deploy#info=devDependencies)

# Lk lambda deploy

### Conventions to follow

* Source code goes into `src/`
* Source code is compiled by [babel](https://babeljs.io/)
* The function entry point is the `handler` function exported in `src/index.js`
* Dependencies must be listed in `package.json`
