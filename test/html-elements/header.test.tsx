import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <header> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<header />);
    strictEqual(result, '<header></header>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<header></header>);
    strictEqual(result, '<header></header>');
  });
});
