import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <hgroup> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<hgroup />);
    strictEqual(result, '<hgroup></hgroup>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<hgroup></hgroup>);
    strictEqual(result, '<hgroup></hgroup>');
  });
});
