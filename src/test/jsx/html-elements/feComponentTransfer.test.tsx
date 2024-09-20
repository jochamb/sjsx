import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <feComponentTransfer> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<feComponentTransfer />);
    strictEqual(result, '<feComponentTransfer></feComponentTransfer>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<feComponentTransfer></feComponentTransfer>);
    strictEqual(result, '<feComponentTransfer></feComponentTransfer>');
  });
});
