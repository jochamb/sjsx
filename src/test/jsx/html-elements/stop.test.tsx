import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <stop> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<stop />);
    strictEqual(result, '<stop></stop>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<stop></stop>);
    strictEqual(result, '<stop></stop>');
  });
});
