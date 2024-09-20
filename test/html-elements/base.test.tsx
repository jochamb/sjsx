import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <base> tag', () => {
  it('renders void element when self-closing tag', async () => {
    const { result } = await renderToString(<base />);
    strictEqual(result, '<base>');
  });

  it('renders void element when default html closing tag', async () => {
    const { result } = await renderToString(<base></base>);
    strictEqual(result, '<base>');
  });
});
