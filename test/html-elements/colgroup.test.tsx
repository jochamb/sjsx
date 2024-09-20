import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <colgroup> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<colgroup />);
    strictEqual(result, '<colgroup></colgroup>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<colgroup></colgroup>);
    strictEqual(result, '<colgroup></colgroup>');
  });
});
