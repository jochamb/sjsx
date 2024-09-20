import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <dfn> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<dfn />);
    strictEqual(result, '<dfn></dfn>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<dfn></dfn>);
    strictEqual(result, '<dfn></dfn>');
  });
});
