import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <pattern> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<pattern />);
    strictEqual(result, '<pattern></pattern>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<pattern></pattern>);
    strictEqual(result, '<pattern></pattern>');
  });
});
