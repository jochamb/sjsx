import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

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
