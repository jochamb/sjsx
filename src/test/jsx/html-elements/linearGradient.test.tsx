import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <linearGradient> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<linearGradient />);
    strictEqual(result, '<linearGradient></linearGradient>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<linearGradient></linearGradient>);
    strictEqual(result, '<linearGradient></linearGradient>');
  });
});
