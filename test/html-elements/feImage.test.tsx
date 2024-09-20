import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <feImage> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<feImage />);
    strictEqual(result, '<feImage></feImage>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<feImage></feImage>);
    strictEqual(result, '<feImage></feImage>');
  });
});
