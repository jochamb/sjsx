import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <feBlend> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<feBlend />);
    strictEqual(result, '<feBlend></feBlend>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<feBlend></feBlend>);
    strictEqual(result, '<feBlend></feBlend>');
  });
});
