import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <feMerge> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<feMerge />);
    strictEqual(result, '<feMerge></feMerge>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<feMerge></feMerge>);
    strictEqual(result, '<feMerge></feMerge>');
  });
});
