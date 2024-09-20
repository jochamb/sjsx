import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <span> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<span />);
    strictEqual(result, '<span></span>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<span></span>);
    strictEqual(result, '<span></span>');
  });
});
