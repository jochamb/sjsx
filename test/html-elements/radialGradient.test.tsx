import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <radialGradient> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<radialGradient />);
    strictEqual(result, '<radialGradient></radialGradient>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<radialGradient></radialGradient>);
    strictEqual(result, '<radialGradient></radialGradient>');
  });
});
