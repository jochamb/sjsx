import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <sub> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<sub />);
    strictEqual(result, '<sub></sub>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<sub></sub>);
    strictEqual(result, '<sub></sub>');
  });
});
