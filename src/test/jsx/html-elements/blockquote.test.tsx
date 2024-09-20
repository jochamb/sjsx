import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

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
