import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <feDisplacementMap> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<feDisplacementMap />);
    strictEqual(result, '<feDisplacementMap></feDisplacementMap>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<feDisplacementMap></feDisplacementMap>);
    strictEqual(result, '<feDisplacementMap></feDisplacementMap>');
  });
});
