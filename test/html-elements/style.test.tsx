import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <style> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<style />);
    strictEqual(result, '<style></style>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<style></style>);
    strictEqual(result, '<style></style>');
  });
});
