import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <p> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<p />);
    strictEqual(result, '<p></p>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<p></p>);
    strictEqual(result, '<p></p>');
  });
});
