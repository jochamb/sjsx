import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <view> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<view />);
    strictEqual(result, '<view></view>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<view></view>);
    strictEqual(result, '<view></view>');
  });
});
