import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <feSpecularLighting> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<feSpecularLighting />);
    strictEqual(result, '<feSpecularLighting></feSpecularLighting>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<feSpecularLighting></feSpecularLighting>);
    strictEqual(result, '<feSpecularLighting></feSpecularLighting>');
  });
});
