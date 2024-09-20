import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <var> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<var />);
    strictEqual(result, '<var></var>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<var></var>);
    strictEqual(result, '<var></var>');
  });
});
