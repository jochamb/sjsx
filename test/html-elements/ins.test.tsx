import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <ins> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<ins />);
    strictEqual(result, '<ins></ins>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<ins></ins>);
    strictEqual(result, '<ins></ins>');
  });
});
