import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <dd> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<dd />);
    strictEqual(result, '<dd></dd>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<dd></dd>);
    strictEqual(result, '<dd></dd>');
  });
});
