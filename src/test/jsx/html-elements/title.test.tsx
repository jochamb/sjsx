import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <title> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<title />);
    strictEqual(result, '<title></title>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<title></title>);
    strictEqual(result, '<title></title>');
  });
});
