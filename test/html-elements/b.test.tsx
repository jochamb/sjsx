import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <b> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<b />);
    strictEqual(result, '<b></b>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<b></b>);
    strictEqual(result, '<b></b>');
  });
});
