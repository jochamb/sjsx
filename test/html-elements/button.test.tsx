import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <button> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<button />);
    strictEqual(result, '<button></button>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<button></button>);
    strictEqual(result, '<button></button>');
  });
});
