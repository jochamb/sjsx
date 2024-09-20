import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <dt> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<dt />);
    strictEqual(result, '<dt></dt>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<dt></dt>);
    strictEqual(result, '<dt></dt>');
  });
});
