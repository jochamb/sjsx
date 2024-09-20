import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <polygon> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<polygon />);
    strictEqual(result, '<polygon></polygon>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<polygon></polygon>);
    strictEqual(result, '<polygon></polygon>');
  });
});
