import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <option> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<option />);
    strictEqual(result, '<option></option>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<option></option>);
    strictEqual(result, '<option></option>');
  });
});
