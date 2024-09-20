import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <dt> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<dt />);
    strictEqual(result, '<dt></dt>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<dt></dt>);
    strictEqual(result, '<dt></dt>');
  });
});
