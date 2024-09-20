import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <wbr> tag', () => {
  it('renders void element when self-closing tag', async () => {
    const { result } = await render(<wbr />);
    strictEqual(result, '<wbr>');
  });

  it('renders void element when default html closing tag', async () => {
    const { result } = await render(<wbr></wbr>);
    strictEqual(result, '<wbr>');
  });
});
