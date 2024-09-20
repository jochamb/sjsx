import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <ruby> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<ruby />);
    strictEqual(result, '<ruby></ruby>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<ruby></ruby>);
    strictEqual(result, '<ruby></ruby>');
  });
});
