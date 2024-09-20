import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <div> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<div />);
    strictEqual(result, '<div></div>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<div></div>);
    strictEqual(result, '<div></div>');
  });
});
