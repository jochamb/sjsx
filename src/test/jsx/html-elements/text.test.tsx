import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <text> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<text />);
    strictEqual(result, '<text></text>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<text></text>);
    strictEqual(result, '<text></text>');
  });
});
