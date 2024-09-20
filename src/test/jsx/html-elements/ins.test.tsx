import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <ins> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<ins />);
    strictEqual(result, '<ins></ins>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<ins></ins>);
    strictEqual(result, '<ins></ins>');
  });
});
