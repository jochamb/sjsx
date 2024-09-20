import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <script> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<script />);
    strictEqual(result, '<script></script>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<script></script>);
    strictEqual(result, '<script></script>');
  });
});
