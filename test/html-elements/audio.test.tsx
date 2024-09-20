import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <audio> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<audio />);
    strictEqual(result, '<audio></audio>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<audio></audio>);
    strictEqual(result, '<audio></audio>');
  });
});
