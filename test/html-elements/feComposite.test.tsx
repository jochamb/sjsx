import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <feComposite> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<feComposite />);
    strictEqual(result, '<feComposite></feComposite>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<feComposite></feComposite>);
    strictEqual(result, '<feComposite></feComposite>');
  });
});
