import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <table> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<table />);
    strictEqual(result, '<table></table>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<table></table>);
    strictEqual(result, '<table></table>');
  });
});
