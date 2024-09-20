import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <feDropShadow> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<feDropShadow />);
    strictEqual(result, '<feDropShadow></feDropShadow>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<feDropShadow></feDropShadow>);
    strictEqual(result, '<feDropShadow></feDropShadow>');
  });
});
