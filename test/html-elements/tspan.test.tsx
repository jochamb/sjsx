import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <tspan> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<tspan />);
    strictEqual(result, '<tspan></tspan>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<tspan></tspan>);
    strictEqual(result, '<tspan></tspan>');
  });
});
