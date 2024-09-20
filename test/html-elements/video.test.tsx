import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <video> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<video />);
    strictEqual(result, '<video></video>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<video></video>);
    strictEqual(result, '<video></video>');
  });
});
