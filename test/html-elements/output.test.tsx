import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <output> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<output />);
    strictEqual(result, '<output></output>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<output></output>);
    strictEqual(result, '<output></output>');
  });
});
