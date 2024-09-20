import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <g> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<g />);
    strictEqual(result, '<g></g>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<g></g>);
    strictEqual(result, '<g></g>');
  });
});
