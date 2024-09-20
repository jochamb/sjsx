import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <feDiffuseLighting> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<feDiffuseLighting />);
    strictEqual(result, '<feDiffuseLighting></feDiffuseLighting>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<feDiffuseLighting></feDiffuseLighting>);
    strictEqual(result, '<feDiffuseLighting></feDiffuseLighting>');
  });
});
