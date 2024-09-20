import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <feColorMatrix> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<feColorMatrix />);
    strictEqual(result, '<feColorMatrix></feColorMatrix>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<feColorMatrix></feColorMatrix>);
    strictEqual(result, '<feColorMatrix></feColorMatrix>');
  });
});
