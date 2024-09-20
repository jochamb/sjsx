import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <feGaussianBlur> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<feGaussianBlur />);
    strictEqual(result, '<feGaussianBlur></feGaussianBlur>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<feGaussianBlur></feGaussianBlur>);
    strictEqual(result, '<feGaussianBlur></feGaussianBlur>');
  });
});
