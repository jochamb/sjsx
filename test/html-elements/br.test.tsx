import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <br> tag', () => {
  it('renders void element when self-closing tag', async () => {
    const { result } = await renderToString(<br />);
    strictEqual(result, '<br>');
  });

  it('renders void element when default html closing tag', async () => {
    const { result } = await renderToString(<br></br>);
    strictEqual(result, '<br>');
  });
});
