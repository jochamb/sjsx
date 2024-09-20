import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <em> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<em />);
    strictEqual(result, '<em></em>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<em></em>);
    strictEqual(result, '<em></em>');
  });
});
