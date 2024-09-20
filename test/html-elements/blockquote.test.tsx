import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <blockquote> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<blockquote />);
    strictEqual(result, '<blockquote></blockquote>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<blockquote></blockquote>);
    strictEqual(result, '<blockquote></blockquote>');
  });
});
