import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <mark> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<mark />);
    strictEqual(result, '<mark></mark>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<mark></mark>);
    strictEqual(result, '<mark></mark>');
  });
});
