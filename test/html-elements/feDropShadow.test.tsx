import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <feDropShadow> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<feDropShadow />);
    strictEqual(result, '<feDropShadow></feDropShadow>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<feDropShadow></feDropShadow>);
    strictEqual(result, '<feDropShadow></feDropShadow>');
  });
});
