import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <bb> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<bb />);
    strictEqual(result, '<bb></bb>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<bb></bb>);
    strictEqual(result, '<bb></bb>');
  });
});
