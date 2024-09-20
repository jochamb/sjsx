import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <switch> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<switch />);
    strictEqual(result, '<switch></switch>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<switch></switch>);
    strictEqual(result, '<switch></switch>');
  });
});
