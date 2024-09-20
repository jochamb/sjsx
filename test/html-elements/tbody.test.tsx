import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <tbody> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<tbody />);
    strictEqual(result, '<tbody></tbody>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<tbody></tbody>);
    strictEqual(result, '<tbody></tbody>');
  });
});
