import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <feMorphology> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<feMorphology />);
    strictEqual(result, '<feMorphology></feMorphology>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<feMorphology></feMorphology>);
    strictEqual(result, '<feMorphology></feMorphology>');
  });
});
