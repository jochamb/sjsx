import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <output> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<output />);
    strictEqual(result, '<output></output>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<output></output>);
    strictEqual(result, '<output></output>');
  });
});
