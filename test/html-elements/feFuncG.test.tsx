import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <feFuncG> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<feFuncG />);
    strictEqual(result, '<feFuncG></feFuncG>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<feFuncG></feFuncG>);
    strictEqual(result, '<feFuncG></feFuncG>');
  });
});
