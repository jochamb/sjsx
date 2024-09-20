import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <hr> tag', () => {
  it('renders void element when self-closing tag', async () => {
    const { result } = await render(<hr />);
    strictEqual(result, '<hr>');
  });

  it('renders void element when default html closing tag', async () => {
    const { result } = await render(<hr></hr>);
    strictEqual(result, '<hr>');
  });
});
