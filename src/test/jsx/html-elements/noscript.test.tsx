import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <noscript> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<noscript />);
    strictEqual(result, '<noscript></noscript>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<noscript></noscript>);
    strictEqual(result, '<noscript></noscript>');
  });
});
