import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <feMergeNode> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<feMergeNode />);
    strictEqual(result, '<feMergeNode></feMergeNode>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<feMergeNode></feMergeNode>);
    strictEqual(result, '<feMergeNode></feMergeNode>');
  });
});
