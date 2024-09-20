import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <label> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<label />);
    strictEqual(result, '<label></label>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<label></label>);
    strictEqual(result, '<label></label>');
  });
});
