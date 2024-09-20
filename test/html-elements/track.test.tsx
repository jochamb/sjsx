import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <track> tag', () => {
  it('renders void element when self-closing tag', async () => {
    const { result } = await renderToString(<track />);
    strictEqual(result, '<track>');
  });

  it('renders void element when default html closing tag', async () => {
    const { result } = await renderToString(<track></track>);
    strictEqual(result, '<track>');
  });
});
