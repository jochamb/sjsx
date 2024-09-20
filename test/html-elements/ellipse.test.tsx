import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <ellipse> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<ellipse />);
    strictEqual(result, '<ellipse></ellipse>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<ellipse></ellipse>);
    strictEqual(result, '<ellipse></ellipse>');
  });
});
