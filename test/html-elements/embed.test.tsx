import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <embed> tag', () => {
  it('renders void element when self-closing tag', async () => {
    const { result } = await renderToString(<embed />);
    strictEqual(result, '<embed>');
  });

  it('renders void element when default html closing tag', async () => {
    const { result } = await renderToString(<embed></embed>);
    strictEqual(result, '<embed>');
  });
});
