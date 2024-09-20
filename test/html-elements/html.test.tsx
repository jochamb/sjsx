import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <html> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<html />);
    strictEqual(result, '<html></html>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<html></html>);
    strictEqual(result, '<html></html>');
  });
});
