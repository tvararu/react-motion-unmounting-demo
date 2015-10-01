#!/bin/bash
ROOT_FOLDER=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )/..

cd $ROOT_FOLDER
npm install
rm -Rf meteor/react-build-generated
./node_modules/.bin/webpack --config webpack/production.config.js -p

find meteor/react-build-generated/client -maxdepth 1 -mindepth 1 -not -name main.js \
    -exec mv '{}' meteor/public/assets \;

find meteor/react-build-generated/server -maxdepth 1 -mindepth 1 -not -name main.js \
    -exec rm -f '{}' \;

cd meteor
meteor --settings $ROOT_FOLDER/settings/production.json
