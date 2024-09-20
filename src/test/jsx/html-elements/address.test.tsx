import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <address> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<address />);
    strictEqual(result, '<address></address>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<address></address>);
    strictEqual(result, '<address></address>');
  });
});
