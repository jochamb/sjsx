import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <menu> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<menu />);
    strictEqual(result, '<menu></menu>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<menu></menu>);
    strictEqual(result, '<menu></menu>');
  });
});
