import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <img> tag', () => {
  it('renders void element when self-closing tag', async () => {
    const { result } = await renderToString(<img />);
    strictEqual(result, '<img>');
  });

  it('renders void element when default html closing tag', async () => {
    const { result } = await renderToString(<img></img>);
    strictEqual(result, '<img>');
  });
});
