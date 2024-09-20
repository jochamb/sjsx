import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <body> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<body />);
    strictEqual(result, '<body></body>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<body></body>);
    strictEqual(result, '<body></body>');
  });
});
