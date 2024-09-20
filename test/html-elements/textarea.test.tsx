import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <textarea> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<textarea />);
    strictEqual(result, '<textarea></textarea>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<textarea></textarea>);
    strictEqual(result, '<textarea></textarea>');
  });
});
