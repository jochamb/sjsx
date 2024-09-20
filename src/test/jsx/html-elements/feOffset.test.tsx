import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <feOffset> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<feOffset />);
    strictEqual(result, '<feOffset></feOffset>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<feOffset></feOffset>);
    strictEqual(result, '<feOffset></feOffset>');
  });
});
