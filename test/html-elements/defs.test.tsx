import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <defs> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<defs />);
    strictEqual(result, '<defs></defs>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<defs></defs>);
    strictEqual(result, '<defs></defs>');
  });
});
