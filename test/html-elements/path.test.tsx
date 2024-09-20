import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <path> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<path />);
    strictEqual(result, '<path></path>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<path></path>);
    strictEqual(result, '<path></path>');
  });
});
