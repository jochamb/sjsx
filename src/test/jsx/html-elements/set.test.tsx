import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <set> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<set />);
    strictEqual(result, '<set></set>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<set></set>);
    strictEqual(result, '<set></set>');
  });
});
