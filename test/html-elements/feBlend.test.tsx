import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <feBlend> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<feBlend />);
    strictEqual(result, '<feBlend></feBlend>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<feBlend></feBlend>);
    strictEqual(result, '<feBlend></feBlend>');
  });
});
