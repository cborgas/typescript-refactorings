import { testing } from '../deps.ts';

const { assertEquals } = testing;

namespace RunTime {
    Deno.test('Am I alive?', (): void => {
        assertEquals(true, true);
    });
}
