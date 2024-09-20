import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <noscript> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<noscript />);
    strictEqual(result, '<noscript></noscript>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<noscript></noscript>);
    strictEqual(result, '<noscript></noscript>');
  });
});
