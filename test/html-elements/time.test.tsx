import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <time> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<time />);
    strictEqual(result, '<time></time>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<time></time>);
    strictEqual(result, '<time></time>');
  });
});
