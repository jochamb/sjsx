import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <keygen> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<keygen />);
    strictEqual(result, '<keygen></keygen>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<keygen></keygen>);
    strictEqual(result, '<keygen></keygen>');
  });
});
