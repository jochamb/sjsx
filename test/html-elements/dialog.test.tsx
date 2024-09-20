import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <dialog> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<dialog />);
    strictEqual(result, '<dialog></dialog>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<dialog></dialog>);
    strictEqual(result, '<dialog></dialog>');
  });
});
