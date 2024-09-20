import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <select> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<select />);
    strictEqual(result, '<select></select>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<select></select>);
    strictEqual(result, '<select></select>');
  });
});
