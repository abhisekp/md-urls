logger.error('Some weird stuffs!');

const Delay = function () {
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            return resolve('Bummer');
        }, 5000);
        logger.debug('WAHT!');
    });
};

(async function abc() {
    console.log(await Delay());
}());

logger.info('Everything is awesome!');
