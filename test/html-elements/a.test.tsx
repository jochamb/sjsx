import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <a> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<a />);
    strictEqual(result, '<a></a>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<a></a>);
    strictEqual(result, '<a></a>');
  });
});
