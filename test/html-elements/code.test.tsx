import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <code> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<code />);
    strictEqual(result, '<code></code>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<code></code>);
    strictEqual(result, '<code></code>');
  });
});
