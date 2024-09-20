import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <dd> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<dd />);
    strictEqual(result, '<dd></dd>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<dd></dd>);
    strictEqual(result, '<dd></dd>');
  });
});
