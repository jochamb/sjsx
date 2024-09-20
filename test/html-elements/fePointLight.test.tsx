import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <fePointLight> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<fePointLight />);
    strictEqual(result, '<fePointLight></fePointLight>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<fePointLight></fePointLight>);
    strictEqual(result, '<fePointLight></fePointLight>');
  });
});
