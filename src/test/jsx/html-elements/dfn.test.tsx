import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

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
