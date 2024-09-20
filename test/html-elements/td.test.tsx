import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <td> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<td />);
    strictEqual(result, '<td></td>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<td></td>);
    strictEqual(result, '<td></td>');
  });
});
