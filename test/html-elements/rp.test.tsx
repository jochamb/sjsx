import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <rp> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<rp />);
    strictEqual(result, '<rp></rp>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<rp></rp>);
    strictEqual(result, '<rp></rp>');
  });
});
