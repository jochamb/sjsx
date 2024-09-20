import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <picture> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<picture />);
    strictEqual(result, '<picture></picture>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<picture></picture>);
    strictEqual(result, '<picture></picture>');
  });
});
