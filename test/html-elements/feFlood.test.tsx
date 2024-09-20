import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <feFlood> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<feFlood />);
    strictEqual(result, '<feFlood></feFlood>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<feFlood></feFlood>);
    strictEqual(result, '<feFlood></feFlood>');
  });
});
