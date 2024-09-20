import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <h3> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<h3 />);
    strictEqual(result, '<h3></h3>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<h3></h3>);
    strictEqual(result, '<h3></h3>');
  });
});
