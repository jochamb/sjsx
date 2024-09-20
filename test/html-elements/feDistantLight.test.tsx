import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <feDistantLight> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<feDistantLight />);
    strictEqual(result, '<feDistantLight></feDistantLight>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<feDistantLight></feDistantLight>);
    strictEqual(result, '<feDistantLight></feDistantLight>');
  });
});
