import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <time> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<time />);
    strictEqual(result, '<time></time>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<time></time>);
    strictEqual(result, '<time></time>');
  });
});
