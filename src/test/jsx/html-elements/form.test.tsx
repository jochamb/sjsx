import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <form> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<form />);
    strictEqual(result, '<form></form>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<form></form>);
    strictEqual(result, '<form></form>');
  });
});
