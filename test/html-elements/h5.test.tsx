import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <h5> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<h5 />);
    strictEqual(result, '<h5></h5>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<h5></h5>);
    strictEqual(result, '<h5></h5>');
  });
});
