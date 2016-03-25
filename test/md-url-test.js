import test from 'tape';
import tapNotify from 'tap-notify';
import promisify from 'tape-promise';

const testp = promisify(test);

// test.createStream().pipe(tapNotify());

test('Test Successful', (t) => {
  t.pass('Successful Comrade');
  t.equal('oK', 'oK', `'oK' should be equal to 'oK'`);
  t.end();
});

const delay = (time = 5000) => new Promise((resolve, reject) => {
  setTimeout(resolve, time);
  setTimeout(reject, time + 2000);
});

testp(async (t) => {
    await delay();
    t.pass('OK');
    t.end;
});
