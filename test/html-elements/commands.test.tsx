import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <commands> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<commands />);
    strictEqual(result, '<commands></commands>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<commands></commands>);
    strictEqual(result, '<commands></commands>');
  });
});
