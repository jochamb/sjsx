import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <bdi> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<bdi />);
    strictEqual(result, '<bdi></bdi>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<bdi></bdi>);
    strictEqual(result, '<bdi></bdi>');
  });
});
