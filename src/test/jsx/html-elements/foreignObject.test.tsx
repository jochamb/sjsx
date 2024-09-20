import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <foreignObject> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<foreignObject />);
    strictEqual(result, '<foreignObject></foreignObject>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<foreignObject></foreignObject>);
    strictEqual(result, '<foreignObject></foreignObject>');
  });
});
