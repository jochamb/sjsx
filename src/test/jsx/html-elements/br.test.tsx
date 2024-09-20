import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <br> tag', () => {
  it('renders void element when self-closing tag', async () => {
    const { result } = await render(<br />);
    strictEqual(result, '<br>');
  });

  it('renders void element when default html closing tag', async () => {
    const { result } = await render(<br></br>);
    strictEqual(result, '<br>');
  });
});
