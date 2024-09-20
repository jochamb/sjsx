import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <cite> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<cite />);
    strictEqual(result, '<cite></cite>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<cite></cite>);
    strictEqual(result, '<cite></cite>');
  });
});
