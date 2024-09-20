import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <address> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<address />);
    strictEqual(result, '<address></address>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<address></address>);
    strictEqual(result, '<address></address>');
  });
});
