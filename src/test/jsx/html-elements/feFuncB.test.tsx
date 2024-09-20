import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <feFuncB> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<feFuncB />);
    strictEqual(result, '<feFuncB></feFuncB>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<feFuncB></feFuncB>);
    strictEqual(result, '<feFuncB></feFuncB>');
  });
});
