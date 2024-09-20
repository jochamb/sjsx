import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <feFuncR> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<feFuncR />);
    strictEqual(result, '<feFuncR></feFuncR>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<feFuncR></feFuncR>);
    strictEqual(result, '<feFuncR></feFuncR>');
  });
});
