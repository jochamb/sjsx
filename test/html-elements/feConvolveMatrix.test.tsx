import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <feConvolveMatrix> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<feConvolveMatrix />);
    strictEqual(result, '<feConvolveMatrix></feConvolveMatrix>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<feConvolveMatrix></feConvolveMatrix>);
    strictEqual(result, '<feConvolveMatrix></feConvolveMatrix>');
  });
});
