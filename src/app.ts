import { search } from '../dist/index';

async function run() {
  console.time('search');
  const result = await search('nq2Skl6zRd', 'apple', 1, 50);
  console.log('RESULT', result);
  console.timeEnd('search');
}

run();
