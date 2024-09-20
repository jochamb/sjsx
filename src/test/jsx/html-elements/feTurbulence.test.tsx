import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <feTurbulence> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<feTurbulence />);
    strictEqual(result, '<feTurbulence></feTurbulence>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<feTurbulence></feTurbulence>);
    strictEqual(result, '<feTurbulence></feTurbulence>');
  });
});
