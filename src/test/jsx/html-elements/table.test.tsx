import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <table> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<table />);
    strictEqual(result, '<table></table>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<table></table>);
    strictEqual(result, '<table></table>');
  });
});
