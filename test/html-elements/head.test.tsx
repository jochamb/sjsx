import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <head> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<head />);
    strictEqual(result, '<head></head>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<head></head>);
    strictEqual(result, '<head></head>');
  });
});
