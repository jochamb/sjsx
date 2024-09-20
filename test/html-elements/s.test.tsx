import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <s> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<s />);
    strictEqual(result, '<s></s>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<s></s>);
    strictEqual(result, '<s></s>');
  });
});
