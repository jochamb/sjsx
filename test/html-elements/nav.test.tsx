import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <nav> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<nav />);
    strictEqual(result, '<nav></nav>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<nav></nav>);
    strictEqual(result, '<nav></nav>');
  });
});
