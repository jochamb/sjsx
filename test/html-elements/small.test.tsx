import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <small> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<small />);
    strictEqual(result, '<small></small>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<small></small>);
    strictEqual(result, '<small></small>');
  });
});
