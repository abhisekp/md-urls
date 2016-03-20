#!/usr/bin/env babel-node
/* eslint no-console: 0 */

'use strict';

import { yargs as args } from 'yargs';
import promisify from 'promisify-lite';
import fs from 'graceful-fs';
import path from 'path';
import log4js from 'log4js';
import json5 from 'json5';
import appRoot from 'app-root-path';

const fsp = promisify(fs);

const log = log4js.getLogger('CLI LOGGER');

const getPackageFile = () => {
  const PACKAGE_PATH = path.resolve(`${appRoot}/package.json`);
  log.debug(`Package Path: ${PACKAGE_PATH}`);

  let packageFileContent = null;

  return (async () => {
    if (!packageFileContent) {
      packageFileContent = await fsp.readFileAsync(PACKAGE_PATH, 'utf-8');
    }

    log.info(`Package file content:\n${packageFileContent}`);

    return packageFileContent;
  })();
};

const getVersion = async () => {
  const VERSION = json5.parse(await getPackageFile()).version;
  log.info(`VERSION: ${VERSION}`);
  return VERSION;
};

getVersion();
