import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <feConvolveMatrix> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<feConvolveMatrix />);
    strictEqual(result, '<feConvolveMatrix></feConvolveMatrix>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<feConvolveMatrix></feConvolveMatrix>);
    strictEqual(result, '<feConvolveMatrix></feConvolveMatrix>');
  });
});
