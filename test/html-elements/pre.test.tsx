import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <pre> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<pre />);
    strictEqual(result, '<pre></pre>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<pre></pre>);
    strictEqual(result, '<pre></pre>');
  });
});
