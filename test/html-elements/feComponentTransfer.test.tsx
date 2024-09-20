import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <feComponentTransfer> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<feComponentTransfer />);
    strictEqual(result, '<feComponentTransfer></feComponentTransfer>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<feComponentTransfer></feComponentTransfer>);
    strictEqual(result, '<feComponentTransfer></feComponentTransfer>');
  });
});
