import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <mask> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<mask />);
    strictEqual(result, '<mask></mask>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<mask></mask>);
    strictEqual(result, '<mask></mask>');
  });
});
