import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <tr> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<tr />);
    strictEqual(result, '<tr></tr>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<tr></tr>);
    strictEqual(result, '<tr></tr>');
  });
});
