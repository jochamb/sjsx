import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <feOffset> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<feOffset />);
    strictEqual(result, '<feOffset></feOffset>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<feOffset></feOffset>);
    strictEqual(result, '<feOffset></feOffset>');
  });
});
