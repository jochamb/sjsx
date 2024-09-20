import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <feTile> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<feTile />);
    strictEqual(result, '<feTile></feTile>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<feTile></feTile>);
    strictEqual(result, '<feTile></feTile>');
  });
});
