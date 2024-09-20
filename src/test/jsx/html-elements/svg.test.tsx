import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <svg> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<svg />);
    strictEqual(result, '<svg></svg>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<svg></svg>);
    strictEqual(result, '<svg></svg>');
  });
});
