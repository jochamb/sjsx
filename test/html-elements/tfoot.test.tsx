import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <tfoot> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<tfoot />);
    strictEqual(result, '<tfoot></tfoot>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<tfoot></tfoot>);
    strictEqual(result, '<tfoot></tfoot>');
  });
});
