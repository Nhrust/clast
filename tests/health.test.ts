import { PROJECT_NAME } from '../shared/mod.ts';

deno.test('shared workspace is available', () => {
  if (PROJECT_NAME !== 'Classic Tanks') {
    throw new Error(`Unexpected project name: ${PROJECT_NAME}`);
  }
});
