import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <h4> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<h4 />);
    strictEqual(result, '<h4></h4>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<h4></h4>);
    strictEqual(result, '<h4></h4>');
  });
});
