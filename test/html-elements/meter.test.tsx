import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <meter> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<meter />);
    strictEqual(result, '<meter></meter>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<meter></meter>);
    strictEqual(result, '<meter></meter>');
  });
});
