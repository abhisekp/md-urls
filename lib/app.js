logger.error('Some weird stuffs!');

const Delay = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Bummer'), 5000);
        logger.debug('WAHT!');
    });
};

async function abc() {
    const bum = await Delay();
    console.log(bum);
}

abc();
logger.info('Everything is awesome!');
