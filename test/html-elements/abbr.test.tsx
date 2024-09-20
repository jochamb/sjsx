import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <abbr> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<abbr />);
    strictEqual(result, '<abbr></abbr>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<abbr></abbr>);
    strictEqual(result, '<abbr></abbr>');
  });
});
