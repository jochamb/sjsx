import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <footer> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<footer />);
    strictEqual(result, '<footer></footer>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<footer></footer>);
    strictEqual(result, '<footer></footer>');
  });
});
