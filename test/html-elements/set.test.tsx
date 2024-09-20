import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <set> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<set />);
    strictEqual(result, '<set></set>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<set></set>);
    strictEqual(result, '<set></set>');
  });
});
