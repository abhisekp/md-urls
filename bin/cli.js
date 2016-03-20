#!/usr/bin/env babel-node

'use strict';

import { commander as program } from 'commander';
import promisify from 'promisify-lite';
import fs from 'graceful-fs';
import path from 'path';
import log4js from 'log4js';
import json5 from 'json5';
import appRoot from 'app-root-path';

const fsp = promisify(fs);

const cliLog = log4js.getLogger('CLI LOGGER');

const getPackageFile = () => {
  const PACKAGE_PATH = path.resolve(`${appRoot}/package.json`);
  cliLog.debug(`Package Path: ${PACKAGE_PATH}`);

  let packageFileContent = null;

  return (async () => {
    if (!packageFileContent) {
      packageFileContent = await fsp.readFileAsync(PACKAGE_PATH, 'utf-8');
    }

    cliLog.info(`Typeof fileContent: ${typeof packageFileContent}`); // <--- string
    cliLog.info(`Package file content:\n${packageFileContent}`);

    return packageFileContent;
  })();
};

const getVersion = async () => {
  const VERSION = json5.parse(await getPackageFile()).version;
  cliLog.debug('VERSION: ', VERSION);
};

getVersion();
