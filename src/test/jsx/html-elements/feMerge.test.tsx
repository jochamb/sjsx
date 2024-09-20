import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <feMerge> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<feMerge />);
    strictEqual(result, '<feMerge></feMerge>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<feMerge></feMerge>);
    strictEqual(result, '<feMerge></feMerge>');
  });
});
