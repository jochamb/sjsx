import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <rb> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<rb />);
    strictEqual(result, '<rb></rb>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<rb></rb>);
    strictEqual(result, '<rb></rb>');
  });
});
