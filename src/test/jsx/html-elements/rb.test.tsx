import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <rb> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<rb />);
    strictEqual(result, '<rb></rb>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<rb></rb>);
    strictEqual(result, '<rb></rb>');
  });
});
