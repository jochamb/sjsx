import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <header> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<header />);
    strictEqual(result, '<header></header>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<header></header>);
    strictEqual(result, '<header></header>');
  });
});
