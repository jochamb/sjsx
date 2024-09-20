import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <feFuncA> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<feFuncA />);
    strictEqual(result, '<feFuncA></feFuncA>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<feFuncA></feFuncA>);
    strictEqual(result, '<feFuncA></feFuncA>');
  });
});
