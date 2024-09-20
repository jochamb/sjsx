import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <summary> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<summary />);
    strictEqual(result, '<summary></summary>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<summary></summary>);
    strictEqual(result, '<summary></summary>');
  });
});
