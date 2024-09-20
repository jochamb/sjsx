import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <legend> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<legend />);
    strictEqual(result, '<legend></legend>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<legend></legend>);
    strictEqual(result, '<legend></legend>');
  });
});
