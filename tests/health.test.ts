import { assertEquals } from 'jsr:@std/assert';
import { PROJECT_NAME } from '../shared/mod.ts';

deno.test('shared workspace is available', () => {
  assertEquals(PROJECT_NAME, 'Classic Tanks');
});
