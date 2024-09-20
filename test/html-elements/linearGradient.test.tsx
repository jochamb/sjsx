import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <linearGradient> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<linearGradient />);
    strictEqual(result, '<linearGradient></linearGradient>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<linearGradient></linearGradient>);
    strictEqual(result, '<linearGradient></linearGradient>');
  });
});
