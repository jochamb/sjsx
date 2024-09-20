import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <text> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<text />);
    strictEqual(result, '<text></text>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<text></text>);
    strictEqual(result, '<text></text>');
  });
});
