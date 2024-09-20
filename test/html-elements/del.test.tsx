import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <del> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<del />);
    strictEqual(result, '<del></del>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<del></del>);
    strictEqual(result, '<del></del>');
  });
});
