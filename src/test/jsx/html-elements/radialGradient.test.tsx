import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <radialGradient> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<radialGradient />);
    strictEqual(result, '<radialGradient></radialGradient>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<radialGradient></radialGradient>);
    strictEqual(result, '<radialGradient></radialGradient>');
  });
});
