import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <ul> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<ul />);
    strictEqual(result, '<ul></ul>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<ul></ul>);
    strictEqual(result, '<ul></ul>');
  });
});
