import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <input> tag', () => {
  it('renders void element when self-closing tag', async () => {
    const { result } = await renderToString(<input />);
    strictEqual(result, '<input>');
  });

  it('renders void element when default html closing tag', async () => {
    const { result } = await renderToString(<input></input>);
    strictEqual(result, '<input>');
  });
});
