import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <symbol> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<symbol />);
    strictEqual(result, '<symbol></symbol>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<symbol></symbol>);
    strictEqual(result, '<symbol></symbol>');
  });
});
