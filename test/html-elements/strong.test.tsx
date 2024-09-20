import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <strong> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<strong />);
    strictEqual(result, '<strong></strong>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<strong></strong>);
    strictEqual(result, '<strong></strong>');
  });
});
