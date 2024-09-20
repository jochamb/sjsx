import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <g> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<g />);
    strictEqual(result, '<g></g>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<g></g>);
    strictEqual(result, '<g></g>');
  });
});
