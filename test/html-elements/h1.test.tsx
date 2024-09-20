import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <h1> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<h1 />);
    strictEqual(result, '<h1></h1>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<h1></h1>);
    strictEqual(result, '<h1></h1>');
  });
});
