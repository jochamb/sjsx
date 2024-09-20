import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <source> tag', () => {
  it('renders void element when self-closing tag', async () => {
    const { result } = await renderToString(<source />);
    strictEqual(result, '<source>');
  });

  it('renders void element when default html closing tag', async () => {
    const { result } = await renderToString(<source></source>);
    strictEqual(result, '<source>');
  });
});
