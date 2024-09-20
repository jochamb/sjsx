import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <summary> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<summary />);
    strictEqual(result, '<summary></summary>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<summary></summary>);
    strictEqual(result, '<summary></summary>');
  });
});
