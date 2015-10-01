#!/bin/bash

# Run this script in Meteor to find your own value:
# console.log(process.platform + '-' + process.arch + '-' + process.versions.modules);
# Then, remove node_modules/node-sass and run this script again
export SASS_BINARY_NAME=linux-x64-11

ROOT_FOLDER=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )/..
cd $ROOT_FOLDER
npm install
rm -rf meteor/react-build-generated

cd meteor
export WEBPACK_CONFIG=$ROOT_FOLDER/webpack/development.config.js
meteor --settings $ROOT_FOLDER/settings/development.json
