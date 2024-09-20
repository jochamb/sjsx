import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <h6> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<h6 />);
    strictEqual(result, '<h6></h6>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<h6></h6>);
    strictEqual(result, '<h6></h6>');
  });
});
