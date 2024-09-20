import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <foreignObject> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<foreignObject />);
    strictEqual(result, '<foreignObject></foreignObject>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<foreignObject></foreignObject>);
    strictEqual(result, '<foreignObject></foreignObject>');
  });
});
