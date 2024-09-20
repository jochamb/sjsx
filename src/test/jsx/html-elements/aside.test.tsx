import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <aside> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<aside />);
    strictEqual(result, '<aside></aside>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<aside></aside>);
    strictEqual(result, '<aside></aside>');
  });
});
