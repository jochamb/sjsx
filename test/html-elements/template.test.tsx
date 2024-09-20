import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <template> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<template />);
    strictEqual(result, '<template></template>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<template></template>);
    strictEqual(result, '<template></template>');
  });
});
