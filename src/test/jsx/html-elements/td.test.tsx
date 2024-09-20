import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <td> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<td />);
    strictEqual(result, '<td></td>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<td></td>);
    strictEqual(result, '<td></td>');
  });
});
