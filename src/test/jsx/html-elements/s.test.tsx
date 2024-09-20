import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <s> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<s />);
    strictEqual(result, '<s></s>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<s></s>);
    strictEqual(result, '<s></s>');
  });
});
