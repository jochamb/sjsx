import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <sub> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<sub />);
    strictEqual(result, '<sub></sub>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<sub></sub>);
    strictEqual(result, '<sub></sub>');
  });
});
