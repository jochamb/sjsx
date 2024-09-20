import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <input> tag', () => {
  it('renders void element when self-closing tag', async () => {
    const { result } = await render(<input />);
    strictEqual(result, '<input>');
  });

  it('renders void element when default html closing tag', async () => {
    const { result } = await render(<input></input>);
    strictEqual(result, '<input>');
  });
});
