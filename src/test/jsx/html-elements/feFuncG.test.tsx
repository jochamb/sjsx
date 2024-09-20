import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <feFuncG> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<feFuncG />);
    strictEqual(result, '<feFuncG></feFuncG>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<feFuncG></feFuncG>);
    strictEqual(result, '<feFuncG></feFuncG>');
  });
});
