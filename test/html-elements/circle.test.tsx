import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <circle> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<circle />);
    strictEqual(result, '<circle></circle>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<circle></circle>);
    strictEqual(result, '<circle></circle>');
  });
});
