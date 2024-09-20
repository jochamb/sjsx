import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <feMorphology> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<feMorphology />);
    strictEqual(result, '<feMorphology></feMorphology>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<feMorphology></feMorphology>);
    strictEqual(result, '<feMorphology></feMorphology>');
  });
});
