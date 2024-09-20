import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <p> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<p />);
    strictEqual(result, '<p></p>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<p></p>);
    strictEqual(result, '<p></p>');
  });
});
