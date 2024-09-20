import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <path> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<path />);
    strictEqual(result, '<path></path>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<path></path>);
    strictEqual(result, '<path></path>');
  });
});
