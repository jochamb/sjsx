import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <ol> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<ol />);
    strictEqual(result, '<ol></ol>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<ol></ol>);
    strictEqual(result, '<ol></ol>');
  });
});
