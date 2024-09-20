import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <th> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<th />);
    strictEqual(result, '<th></th>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<th></th>);
    strictEqual(result, '<th></th>');
  });
});
