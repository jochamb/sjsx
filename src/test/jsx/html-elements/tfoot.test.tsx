import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <tfoot> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<tfoot />);
    strictEqual(result, '<tfoot></tfoot>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<tfoot></tfoot>);
    strictEqual(result, '<tfoot></tfoot>');
  });
});
