import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <button> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<button />);
    strictEqual(result, '<button></button>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<button></button>);
    strictEqual(result, '<button></button>');
  });
});
