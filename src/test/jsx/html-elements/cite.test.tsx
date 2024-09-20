import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <cite> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<cite />);
    strictEqual(result, '<cite></cite>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<cite></cite>);
    strictEqual(result, '<cite></cite>');
  });
});
