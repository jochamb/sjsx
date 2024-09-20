import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <i> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<i />);
    strictEqual(result, '<i></i>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<i></i>);
    strictEqual(result, '<i></i>');
  });
});
