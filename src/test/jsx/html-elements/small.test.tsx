import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <small> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<small />);
    strictEqual(result, '<small></small>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<small></small>);
    strictEqual(result, '<small></small>');
  });
});
