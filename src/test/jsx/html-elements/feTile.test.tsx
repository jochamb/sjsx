import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <feTile> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<feTile />);
    strictEqual(result, '<feTile></feTile>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<feTile></feTile>);
    strictEqual(result, '<feTile></feTile>');
  });
});
