import log4js from 'log4js';

const Console = {
  log4js,
  logger: log4js.getLogger('default'),
};

Object.assign(global, Console);

export default Console;
