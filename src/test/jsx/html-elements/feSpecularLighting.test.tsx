import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <feSpecularLighting> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<feSpecularLighting />);
    strictEqual(result, '<feSpecularLighting></feSpecularLighting>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<feSpecularLighting></feSpecularLighting>);
    strictEqual(result, '<feSpecularLighting></feSpecularLighting>');
  });
});
