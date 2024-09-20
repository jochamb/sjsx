import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <sup> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<sup />);
    strictEqual(result, '<sup></sup>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<sup></sup>);
    strictEqual(result, '<sup></sup>');
  });
});
