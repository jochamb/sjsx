import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <svg> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<svg />);
    strictEqual(result, '<svg></svg>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<svg></svg>);
    strictEqual(result, '<svg></svg>');
  });
});
