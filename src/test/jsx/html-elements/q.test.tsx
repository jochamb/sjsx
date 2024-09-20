import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <q> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<q />);
    strictEqual(result, '<q></q>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<q></q>);
    strictEqual(result, '<q></q>');
  });
});
