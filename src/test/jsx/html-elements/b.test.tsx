import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <b> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<b />);
    strictEqual(result, '<b></b>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<b></b>);
    strictEqual(result, '<b></b>');
  });
});
