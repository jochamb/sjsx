import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <rect> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<rect />);
    strictEqual(result, '<rect></rect>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<rect></rect>);
    strictEqual(result, '<rect></rect>');
  });
});
