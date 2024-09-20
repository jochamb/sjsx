import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <main> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<main />);
    strictEqual(result, '<main></main>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<main></main>);
    strictEqual(result, '<main></main>');
  });
});
