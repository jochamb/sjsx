import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <circle> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<circle />);
    strictEqual(result, '<circle></circle>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<circle></circle>);
    strictEqual(result, '<circle></circle>');
  });
});
