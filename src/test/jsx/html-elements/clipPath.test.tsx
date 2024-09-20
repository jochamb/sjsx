import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <clipPath> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<clipPath />);
    strictEqual(result, '<clipPath></clipPath>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<clipPath></clipPath>);
    strictEqual(result, '<clipPath></clipPath>');
  });
});
