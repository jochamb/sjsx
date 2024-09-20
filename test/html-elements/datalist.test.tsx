import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <datalist> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<datalist />);
    strictEqual(result, '<datalist></datalist>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<datalist></datalist>);
    strictEqual(result, '<datalist></datalist>');
  });
});
