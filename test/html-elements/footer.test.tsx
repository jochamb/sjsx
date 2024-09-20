import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <footer> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<footer />);
    strictEqual(result, '<footer></footer>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<footer></footer>);
    strictEqual(result, '<footer></footer>');
  });
});
