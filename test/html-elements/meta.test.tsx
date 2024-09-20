import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <meta> tag', () => {
  it('renders void element when self-closing tag', async () => {
    const { result } = await renderToString(<meta />);
    strictEqual(result, '<meta>');
  });

  it('renders void element when default html closing tag', async () => {
    const { result } = await renderToString(<meta></meta>);
    strictEqual(result, '<meta>');
  });
});
