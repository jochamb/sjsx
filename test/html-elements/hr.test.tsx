import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <hr> tag', () => {
  it('renders void element when self-closing tag', async () => {
    const { result } = await renderToString(<hr />);
    strictEqual(result, '<hr>');
  });

  it('renders void element when default html closing tag', async () => {
    const { result } = await renderToString(<hr></hr>);
    strictEqual(result, '<hr>');
  });
});
