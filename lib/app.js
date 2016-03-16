logger.error('Some weird stuffs!');

const delay = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve('Bummer'), 5000);
  logger.debug('WAHT!');
});

async function abc() {
  const bum = await delay();
  logger.info(bum);
}

abc();
logger.info('Everything is awesome!');
