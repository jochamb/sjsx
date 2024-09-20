import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <h6> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<h6 />);
    strictEqual(result, '<h6></h6>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<h6></h6>);
    strictEqual(result, '<h6></h6>');
  });
});
