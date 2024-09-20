import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <use> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<use />);
    strictEqual(result, '<use></use>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<use></use>);
    strictEqual(result, '<use></use>');
  });
});
