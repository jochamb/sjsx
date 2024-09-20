import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <feSpotLight> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<feSpotLight />);
    strictEqual(result, '<feSpotLight></feSpotLight>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<feSpotLight></feSpotLight>);
    strictEqual(result, '<feSpotLight></feSpotLight>');
  });
});
