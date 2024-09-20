import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <span> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<span />);
    strictEqual(result, '<span></span>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<span></span>);
    strictEqual(result, '<span></span>');
  });
});
