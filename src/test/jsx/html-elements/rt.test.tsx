import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <rt> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<rt />);
    strictEqual(result, '<rt></rt>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<rt></rt>);
    strictEqual(result, '<rt></rt>');
  });
});
