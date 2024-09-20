import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <option> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<option />);
    strictEqual(result, '<option></option>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<option></option>);
    strictEqual(result, '<option></option>');
  });
});
