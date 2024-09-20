import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <marker> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<marker />);
    strictEqual(result, '<marker></marker>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<marker></marker>);
    strictEqual(result, '<marker></marker>');
  });
});
