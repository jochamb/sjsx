import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <code> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<code />);
    strictEqual(result, '<code></code>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<code></code>);
    strictEqual(result, '<code></code>');
  });
});
