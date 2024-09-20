import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <base> tag', () => {
  it('renders void element when self-closing tag', async () => {
    const { result } = await render(<base />);
    strictEqual(result, '<base>');
  });

  it('renders void element when default html closing tag', async () => {
    const { result } = await render(<base></base>);
    strictEqual(result, '<base>');
  });
});
