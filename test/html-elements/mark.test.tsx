import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <mark> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<mark />);
    strictEqual(result, '<mark></mark>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<mark></mark>);
    strictEqual(result, '<mark></mark>');
  });
});
