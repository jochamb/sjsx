import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <script> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<script />);
    strictEqual(result, '<script></script>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<script></script>);
    strictEqual(result, '<script></script>');
  });
});
