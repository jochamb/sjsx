import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <desc> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<desc />);
    strictEqual(result, '<desc></desc>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<desc></desc>);
    strictEqual(result, '<desc></desc>');
  });
});
