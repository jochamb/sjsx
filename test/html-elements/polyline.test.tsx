import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <polyline> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<polyline />);
    strictEqual(result, '<polyline></polyline>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<polyline></polyline>);
    strictEqual(result, '<polyline></polyline>');
  });
});
