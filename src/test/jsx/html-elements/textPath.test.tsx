import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <textPath> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<textPath />);
    strictEqual(result, '<textPath></textPath>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<textPath></textPath>);
    strictEqual(result, '<textPath></textPath>');
  });
});
