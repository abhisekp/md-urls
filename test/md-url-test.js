import test from 'tape';
import tapNotify from 'tap-notify';
import tapDiff from 'tap-diff';
import promisify from 'tape-promise';

const testp = promisify(test);

testp.createStream()
     .pipe(tapNotify())
     .pipe(tapDiff())
     .pipe(process.stdout);

const delay = (time = 5000) => new Promise((resolve, reject) => {
  setTimeout(() => resolve('Success is at your feet'), time);
  setTimeout(() => reject(Error('BIG FAIL!!!')), time + 2000);
});

testp('Hello', async (t) => {
    t.pass(await delay());
    t.end();
});

test('Test Successful', (t) => {
  t.pass('Successful Comrade');
  t.equal('oK', 'oK', `'oK' should be equal to 'oK'`);
  t.end();
});
