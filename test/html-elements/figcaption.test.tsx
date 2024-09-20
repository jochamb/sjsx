import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <figcaption> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<figcaption />);
    strictEqual(result, '<figcaption></figcaption>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<figcaption></figcaption>);
    strictEqual(result, '<figcaption></figcaption>');
  });
});
