import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <details> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<details />);
    strictEqual(result, '<details></details>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<details></details>);
    strictEqual(result, '<details></details>');
  });
});
