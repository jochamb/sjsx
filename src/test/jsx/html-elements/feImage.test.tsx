import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <feImage> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<feImage />);
    strictEqual(result, '<feImage></feImage>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<feImage></feImage>);
    strictEqual(result, '<feImage></feImage>');
  });
});
