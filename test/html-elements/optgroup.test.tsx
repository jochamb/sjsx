import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <optgroup> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<optgroup />);
    strictEqual(result, '<optgroup></optgroup>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<optgroup></optgroup>);
    strictEqual(result, '<optgroup></optgroup>');
  });
});
