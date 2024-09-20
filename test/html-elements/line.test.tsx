import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <line> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<line />);
    strictEqual(result, '<line></line>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<line></line>);
    strictEqual(result, '<line></line>');
  });
});
