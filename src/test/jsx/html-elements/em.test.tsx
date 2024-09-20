import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <em> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<em />);
    strictEqual(result, '<em></em>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<em></em>);
    strictEqual(result, '<em></em>');
  });
});
