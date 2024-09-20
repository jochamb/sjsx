import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <i> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<i />);
    strictEqual(result, '<i></i>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<i></i>);
    strictEqual(result, '<i></i>');
  });
});
