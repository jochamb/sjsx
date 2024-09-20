import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <h2> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<h2 />);
    strictEqual(result, '<h2></h2>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<h2></h2>);
    strictEqual(result, '<h2></h2>');
  });
});
