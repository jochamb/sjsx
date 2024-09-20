import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <feDiffuseLighting> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<feDiffuseLighting />);
    strictEqual(result, '<feDiffuseLighting></feDiffuseLighting>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<feDiffuseLighting></feDiffuseLighting>);
    strictEqual(result, '<feDiffuseLighting></feDiffuseLighting>');
  });
});
