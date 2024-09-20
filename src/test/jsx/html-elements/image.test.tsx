import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <image> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<image />);
    strictEqual(result, '<image></image>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<image></image>);
    strictEqual(result, '<image></image>');
  });
});
