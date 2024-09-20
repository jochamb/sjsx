import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <nav> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<nav />);
    strictEqual(result, '<nav></nav>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<nav></nav>);
    strictEqual(result, '<nav></nav>');
  });
});
