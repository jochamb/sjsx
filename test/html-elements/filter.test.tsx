import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <filter> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<filter />);
    strictEqual(result, '<filter></filter>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<filter></filter>);
    strictEqual(result, '<filter></filter>');
  });
});
