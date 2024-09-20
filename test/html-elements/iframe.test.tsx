import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <iframe> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<iframe />);
    strictEqual(result, '<iframe></iframe>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<iframe></iframe>);
    strictEqual(result, '<iframe></iframe>');
  });
});
