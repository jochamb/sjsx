import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <caption> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<caption />);
    strictEqual(result, '<caption></caption>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<caption></caption>);
    strictEqual(result, '<caption></caption>');
  });
});
