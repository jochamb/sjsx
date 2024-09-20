import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <animateMotion> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<animateMotion />);
    strictEqual(result, '<animateMotion></animateMotion>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<animateMotion></animateMotion>);
    strictEqual(result, '<animateMotion></animateMotion>');
  });
});
