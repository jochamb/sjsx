import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <clipPath> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<clipPath />);
    strictEqual(result, '<clipPath></clipPath>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<clipPath></clipPath>);
    strictEqual(result, '<clipPath></clipPath>');
  });
});
