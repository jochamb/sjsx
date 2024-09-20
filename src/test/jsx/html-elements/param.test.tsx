import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <param> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<param />);
    strictEqual(result, '<param></param>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<param></param>);
    strictEqual(result, '<param></param>');
  });
});
