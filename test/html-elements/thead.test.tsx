import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <thead> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<thead />);
    strictEqual(result, '<thead></thead>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<thead></thead>);
    strictEqual(result, '<thead></thead>');
  });
});
