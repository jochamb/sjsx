import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <stop> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<stop />);
    strictEqual(result, '<stop></stop>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<stop></stop>);
    strictEqual(result, '<stop></stop>');
  });
});
