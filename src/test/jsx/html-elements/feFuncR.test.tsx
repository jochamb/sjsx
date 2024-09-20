import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <feFuncR> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<feFuncR />);
    strictEqual(result, '<feFuncR></feFuncR>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<feFuncR></feFuncR>);
    strictEqual(result, '<feFuncR></feFuncR>');
  });
});
