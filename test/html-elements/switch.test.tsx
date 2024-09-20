import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <switch> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<switch />);
    strictEqual(result, '<switch></switch>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<switch></switch>);
    strictEqual(result, '<switch></switch>');
  });
});
