import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <form> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<form />);
    strictEqual(result, '<form></form>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<form></form>);
    strictEqual(result, '<form></form>');
  });
});
