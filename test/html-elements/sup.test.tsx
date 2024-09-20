import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <sup> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<sup />);
    strictEqual(result, '<sup></sup>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<sup></sup>);
    strictEqual(result, '<sup></sup>');
  });
});
