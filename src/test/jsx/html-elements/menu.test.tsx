import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <menu> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<menu />);
    strictEqual(result, '<menu></menu>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<menu></menu>);
    strictEqual(result, '<menu></menu>');
  });
});
