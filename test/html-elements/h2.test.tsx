import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <h2> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<h2 />);
    strictEqual(result, '<h2></h2>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<h2></h2>);
    strictEqual(result, '<h2></h2>');
  });
});
