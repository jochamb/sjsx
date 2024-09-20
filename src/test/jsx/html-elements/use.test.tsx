import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <use> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<use />);
    strictEqual(result, '<use></use>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<use></use>);
    strictEqual(result, '<use></use>');
  });
});
