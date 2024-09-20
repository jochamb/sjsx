import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <meter> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<meter />);
    strictEqual(result, '<meter></meter>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<meter></meter>);
    strictEqual(result, '<meter></meter>');
  });
});
