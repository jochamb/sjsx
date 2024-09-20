import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <samp> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<samp />);
    strictEqual(result, '<samp></samp>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<samp></samp>);
    strictEqual(result, '<samp></samp>');
  });
});
