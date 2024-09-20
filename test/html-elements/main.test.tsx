import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <main> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<main />);
    strictEqual(result, '<main></main>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<main></main>);
    strictEqual(result, '<main></main>');
  });
});
