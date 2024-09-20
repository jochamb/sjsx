import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <ul> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<ul />);
    strictEqual(result, '<ul></ul>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<ul></ul>);
    strictEqual(result, '<ul></ul>');
  });
});
