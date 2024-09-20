import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <map> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<map />);
    strictEqual(result, '<map></map>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<map></map>);
    strictEqual(result, '<map></map>');
  });
});
