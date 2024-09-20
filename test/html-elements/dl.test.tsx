import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <dl> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<dl />);
    strictEqual(result, '<dl></dl>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<dl></dl>);
    strictEqual(result, '<dl></dl>');
  });
});
