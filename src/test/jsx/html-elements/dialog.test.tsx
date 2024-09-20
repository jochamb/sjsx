import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <dialog> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<dialog />);
    strictEqual(result, '<dialog></dialog>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<dialog></dialog>);
    strictEqual(result, '<dialog></dialog>');
  });
});
