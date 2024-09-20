import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <param> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<param />);
    strictEqual(result, '<param></param>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<param></param>);
    strictEqual(result, '<param></param>');
  });
});
