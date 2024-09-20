import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <samp> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<samp />);
    strictEqual(result, '<samp></samp>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<samp></samp>);
    strictEqual(result, '<samp></samp>');
  });
});
