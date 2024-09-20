import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <bdo> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<bdo />);
    strictEqual(result, '<bdo></bdo>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<bdo></bdo>);
    strictEqual(result, '<bdo></bdo>');
  });
});
