import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <feFlood> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<feFlood />);
    strictEqual(result, '<feFlood></feFlood>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<feFlood></feFlood>);
    strictEqual(result, '<feFlood></feFlood>');
  });
});
