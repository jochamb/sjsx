import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <legend> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<legend />);
    strictEqual(result, '<legend></legend>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<legend></legend>);
    strictEqual(result, '<legend></legend>');
  });
});
