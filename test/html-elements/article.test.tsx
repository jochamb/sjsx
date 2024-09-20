import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <article> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<article />);
    strictEqual(result, '<article></article>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<article></article>);
    strictEqual(result, '<article></article>');
  });
});
