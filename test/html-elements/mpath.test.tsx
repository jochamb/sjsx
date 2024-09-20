import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <mpath> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<mpath />);
    strictEqual(result, '<mpath></mpath>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<mpath></mpath>);
    strictEqual(result, '<mpath></mpath>');
  });
});
