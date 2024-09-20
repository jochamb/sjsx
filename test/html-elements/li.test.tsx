import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <li> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<li />);
    strictEqual(result, '<li></li>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<li></li>);
    strictEqual(result, '<li></li>');
  });
});
