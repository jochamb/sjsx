import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <var> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<var />);
    strictEqual(result, '<var></var>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<var></var>);
    strictEqual(result, '<var></var>');
  });
});
