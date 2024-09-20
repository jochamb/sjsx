import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <figure> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<figure />);
    strictEqual(result, '<figure></figure>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<figure></figure>);
    strictEqual(result, '<figure></figure>');
  });
});
