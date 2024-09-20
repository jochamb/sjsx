import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <em> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<em />);
    strictEqual(result, '<em></em>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<em></em>);
    strictEqual(result, '<em></em>');
  });
});
