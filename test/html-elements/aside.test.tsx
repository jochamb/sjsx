import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <aside> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<aside />);
    strictEqual(result, '<aside></aside>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<aside></aside>);
    strictEqual(result, '<aside></aside>');
  });
});
