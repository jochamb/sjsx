import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <feFuncA> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<feFuncA />);
    strictEqual(result, '<feFuncA></feFuncA>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<feFuncA></feFuncA>);
    strictEqual(result, '<feFuncA></feFuncA>');
  });
});
