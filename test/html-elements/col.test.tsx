import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <col> tag', () => {
  it('renders void element when self-closing tag', async () => {
    const { result } = await renderToString(<col />);
    strictEqual(result, '<col>');
  });

  it('renders void element when default html closing tag', async () => {
    const { result } = await renderToString(<col></col>);
    strictEqual(result, '<col>');
  });
});
