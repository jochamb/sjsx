import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <feMergeNode> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<feMergeNode />);
    strictEqual(result, '<feMergeNode></feMergeNode>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<feMergeNode></feMergeNode>);
    strictEqual(result, '<feMergeNode></feMergeNode>');
  });
});
