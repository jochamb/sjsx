import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <area> tag', () => {
  it('renders void element when self-closing tag', async () => {
    const { result } = await renderToString(<area />);
    strictEqual(result, '<area>');
  });

  it('renders void element when default html closing tag', async () => {
    const { result } = await renderToString(<area></area>);
    strictEqual(result, '<area>');
  });
});
