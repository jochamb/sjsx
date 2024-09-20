import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <blockquote> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<blockquote />);
    strictEqual(result, '<blockquote></blockquote>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<blockquote></blockquote>);
    strictEqual(result, '<blockquote></blockquote>');
  });
});
