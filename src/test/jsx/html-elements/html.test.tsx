import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <html> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<html />);
    strictEqual(result, '<html></html>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<html></html>);
    strictEqual(result, '<html></html>');
  });
});
