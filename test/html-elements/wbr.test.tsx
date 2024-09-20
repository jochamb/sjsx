import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <wbr> tag', () => {
  it('renders void element when self-closing tag', async () => {
    const { result } = await renderToString(<wbr />);
    strictEqual(result, '<wbr>');
  });

  it('renders void element when default html closing tag', async () => {
    const { result } = await renderToString(<wbr></wbr>);
    strictEqual(result, '<wbr>');
  });
});
