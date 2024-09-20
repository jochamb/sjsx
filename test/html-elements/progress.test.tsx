import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <progress> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<progress />);
    strictEqual(result, '<progress></progress>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<progress></progress>);
    strictEqual(result, '<progress></progress>');
  });
});
