import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <data> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<data />);
    strictEqual(result, '<data></data>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<data></data>);
    strictEqual(result, '<data></data>');
  });
});
