import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <symbol> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<symbol />);
    strictEqual(result, '<symbol></symbol>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<symbol></symbol>);
    strictEqual(result, '<symbol></symbol>');
  });
});
