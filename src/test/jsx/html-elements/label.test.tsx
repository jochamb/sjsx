import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <label> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<label />);
    strictEqual(result, '<label></label>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<label></label>);
    strictEqual(result, '<label></label>');
  });
});
