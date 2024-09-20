import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <polygon> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<polygon />);
    strictEqual(result, '<polygon></polygon>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<polygon></polygon>);
    strictEqual(result, '<polygon></polygon>');
  });
});
