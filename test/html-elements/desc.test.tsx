import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <desc> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<desc />);
    strictEqual(result, '<desc></desc>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<desc></desc>);
    strictEqual(result, '<desc></desc>');
  });
});
