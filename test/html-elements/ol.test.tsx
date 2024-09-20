import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <ol> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<ol />);
    strictEqual(result, '<ol></ol>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<ol></ol>);
    strictEqual(result, '<ol></ol>');
  });
});
