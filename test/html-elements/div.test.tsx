import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <div> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<div />);
    strictEqual(result, '<div></div>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<div></div>);
    strictEqual(result, '<div></div>');
  });
});
