const fsextra = require('fs-extra');
const { exec } = require('child_process');

const filterFunc = (src, dest) => {
    // it will be copied if return true
    return !src.endsWith("spec.ts");
}

fsextra.remove('./dist-lib', err => {
    if (err) return console.error(err);
    console.log('Output directory removed');
    copyFiles();
  });

function copyFiles() {
    fsextra.copy('./src/app/tf-project', './dist-lib', { filter: filterFunc }, err => {
        if (err) return console.error(err);
        console.log('Copied files');
        createDeclarations();
    });
}

function createDeclarations() {
  exec('cd dist-lib && tsc index.ts --declaration', () => {
    console.log('Generated declarations (and some JS files...)');
    createPackageJson();
  });
}

function createPackageJson() {
  const packageJSON =  {
    "name": "tf-project",
    "version": "0.0.0",
    "description": "Base tf-project",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [
      "Angular"
    ],
    "license": "MIT",
    "types": "index.d.ts"
  };
  fsextra.writeJson('./dist-lib/package.json', packageJSON, {spaces: 2}, err => {
    if (err) return console.error(err);
    console.log('Created package.json');
    packFiles();
  });

}

function packFiles() {
    exec('cd dist-lib && npm pack', () => {
        console.log('Generated NPM package');
    });
}