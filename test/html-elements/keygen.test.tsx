import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <keygen> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<keygen />);
    strictEqual(result, '<keygen></keygen>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<keygen></keygen>);
    strictEqual(result, '<keygen></keygen>');
  });
});
