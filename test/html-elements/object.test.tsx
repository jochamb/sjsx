import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <object> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<object />);
    strictEqual(result, '<object></object>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<object></object>);
    strictEqual(result, '<object></object>');
  });
});
