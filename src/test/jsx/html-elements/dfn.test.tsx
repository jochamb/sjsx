import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <dfn> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<dfn />);
    strictEqual(result, '<dfn></dfn>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<dfn></dfn>);
    strictEqual(result, '<dfn></dfn>');
  });
});
