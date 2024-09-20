import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <kbd> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<kbd />);
    strictEqual(result, '<kbd></kbd>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<kbd></kbd>);
    strictEqual(result, '<kbd></kbd>');
  });
});
