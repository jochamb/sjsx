import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <article> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<article />);
    strictEqual(result, '<article></article>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<article></article>);
    strictEqual(result, '<article></article>');
  });
});
