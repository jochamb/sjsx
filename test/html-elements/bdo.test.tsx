import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <bdo> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<bdo />);
    strictEqual(result, '<bdo></bdo>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<bdo></bdo>);
    strictEqual(result, '<bdo></bdo>');
  });
});
