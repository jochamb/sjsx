import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <metadata> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<metadata />);
    strictEqual(result, '<metadata></metadata>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<metadata></metadata>);
    strictEqual(result, '<metadata></metadata>');
  });
});
