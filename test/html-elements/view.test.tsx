import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <view> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<view />);
    strictEqual(result, '<view></view>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<view></view>);
    strictEqual(result, '<view></view>');
  });
});
