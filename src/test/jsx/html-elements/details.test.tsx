import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <details> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<details />);
    strictEqual(result, '<details></details>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<details></details>);
    strictEqual(result, '<details></details>');
  });
});
