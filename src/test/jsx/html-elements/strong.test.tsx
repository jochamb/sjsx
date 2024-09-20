import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <strong> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<strong />);
    strictEqual(result, '<strong></strong>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<strong></strong>);
    strictEqual(result, '<strong></strong>');
  });
});
