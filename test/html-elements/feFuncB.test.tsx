import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <feFuncB> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<feFuncB />);
    strictEqual(result, '<feFuncB></feFuncB>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<feFuncB></feFuncB>);
    strictEqual(result, '<feFuncB></feFuncB>');
  });
});
