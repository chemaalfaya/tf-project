const fsextra = require('fs-extra');
const exec = require('await-exec');


compileToNpmPackage();

//#region Methods
async function removeDistLibDirectory() {
    try {
        await fsextra.remove('./dist-lib');
        console.log('Output directory removed');
    } catch (err) {
      console.error(err);
    }
}

async function copyFiles() {
    const filterFunc = (src, dest) => !src.endsWith("spec.ts");
    try {
        await fsextra.copy('./src/app/tf-project', './dist-lib', { filter: filterFunc });
        console.log('New files copied to output directory');
    } catch (err) {
      console.error(err);
    }
}

async function createDeclarations() {
    try {
        await exec('cd dist-lib && tsc index.ts --declaration --experimentalDecorators | awk "!/node_modules/"');
        console.log('Declarations generated (and some JS files)');
    } catch (err) {
        console.error(err);
    }
}

async function createPackageJson() {
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

    try {
        await fsextra.writeJson('./dist-lib/package.json', packageJSON, {spaces: 2});
        console.log('Package.json created');
    } catch (err) {
        console.error(err);
    }
}

async function packFiles() {
    try {
        await exec('cd dist-lib && npm pack');
        console.log('NPM package generated ');
    } catch (err) {
        console.error(err);
    }
}

async function compileToNpmPackage() {
    await removeDistLibDirectory();
    await copyFiles();
    await createDeclarations();
    await createPackageJson();
    await packFiles();
}
//#endregion
