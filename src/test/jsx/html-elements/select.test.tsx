import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <select> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<select />);
    strictEqual(result, '<select></select>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<select></select>);
    strictEqual(result, '<select></select>');
  });
});
