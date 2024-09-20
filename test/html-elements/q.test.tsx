import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <q> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<q />);
    strictEqual(result, '<q></q>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<q></q>);
    strictEqual(result, '<q></q>');
  });
});
