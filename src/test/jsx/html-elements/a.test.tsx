import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <a> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<a />);
    strictEqual(result, '<a></a>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<a></a>);
    strictEqual(result, '<a></a>');
  });
});
