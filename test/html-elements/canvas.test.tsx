import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <canvas> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<canvas />);
    strictEqual(result, '<canvas></canvas>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<canvas></canvas>);
    strictEqual(result, '<canvas></canvas>');
  });
});
