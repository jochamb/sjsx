import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <link> tag', () => {
  it('renders void element when self-closing tag', async () => {
    const { result } = await renderToString(<link />);
    strictEqual(result, '<link>');
  });

  it('renders void element when default html closing tag', async () => {
    const { result } = await renderToString(<link></link>);
    strictEqual(result, '<link>');
  });
});
