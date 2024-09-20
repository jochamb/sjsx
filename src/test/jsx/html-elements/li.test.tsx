import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <li> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<li />);
    strictEqual(result, '<li></li>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<li></li>);
    strictEqual(result, '<li></li>');
  });
});
