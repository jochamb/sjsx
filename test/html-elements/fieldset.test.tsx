import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <fieldset> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<fieldset />);
    strictEqual(result, '<fieldset></fieldset>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<fieldset></fieldset>);
    strictEqual(result, '<fieldset></fieldset>');
  });
});
