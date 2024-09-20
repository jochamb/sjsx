import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <feTurbulence> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<feTurbulence />);
    strictEqual(result, '<feTurbulence></feTurbulence>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<feTurbulence></feTurbulence>);
    strictEqual(result, '<feTurbulence></feTurbulence>');
  });
});
