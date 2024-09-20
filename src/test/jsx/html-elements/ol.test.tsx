import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <ol> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<ol />);
    strictEqual(result, '<ol></ol>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<ol></ol>);
    strictEqual(result, '<ol></ol>');
  });
});
