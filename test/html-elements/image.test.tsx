import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <image> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<image />);
    strictEqual(result, '<image></image>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<image></image>);
    strictEqual(result, '<image></image>');
  });
});
