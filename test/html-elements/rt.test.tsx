import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <rt> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<rt />);
    strictEqual(result, '<rt></rt>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<rt></rt>);
    strictEqual(result, '<rt></rt>');
  });
});
