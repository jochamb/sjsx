import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <animate> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<animate />);
    strictEqual(result, '<animate></animate>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<animate></animate>);
    strictEqual(result, '<animate></animate>');
  });
});
