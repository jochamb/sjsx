import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <embed> tag', () => {
  it('renders void element when self-closing tag', async () => {
    const { result } = await render(<embed />);
    strictEqual(result, '<embed>');
  });

  it('renders void element when default html closing tag', async () => {
    const { result } = await render(<embed></embed>);
    strictEqual(result, '<embed>');
  });
});
