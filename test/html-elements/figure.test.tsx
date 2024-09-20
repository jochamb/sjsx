import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <figure> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<figure />);
    strictEqual(result, '<figure></figure>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<figure></figure>);
    strictEqual(result, '<figure></figure>');
  });
});
