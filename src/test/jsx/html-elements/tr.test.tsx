import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <tr> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<tr />);
    strictEqual(result, '<tr></tr>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<tr></tr>);
    strictEqual(result, '<tr></tr>');
  });
});
