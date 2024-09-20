import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <feGaussianBlur> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<feGaussianBlur />);
    strictEqual(result, '<feGaussianBlur></feGaussianBlur>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<feGaussianBlur></feGaussianBlur>);
    strictEqual(result, '<feGaussianBlur></feGaussianBlur>');
  });
});
