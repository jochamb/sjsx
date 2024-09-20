import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <animate> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<animate />);
    strictEqual(result, '<animate></animate>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<animate></animate>);
    strictEqual(result, '<animate></animate>');
  });
});
