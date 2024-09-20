import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <u> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<u />);
    strictEqual(result, '<u></u>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<u></u>);
    strictEqual(result, '<u></u>');
  });
});
