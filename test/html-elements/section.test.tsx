import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <section> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<section />);
    strictEqual(result, '<section></section>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<section></section>);
    strictEqual(result, '<section></section>');
  });
});
