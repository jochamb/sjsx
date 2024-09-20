import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <title> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<title />);
    strictEqual(result, '<title></title>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<title></title>);
    strictEqual(result, '<title></title>');
  });
});
