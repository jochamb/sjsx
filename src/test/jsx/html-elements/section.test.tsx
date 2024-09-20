import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <section> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<section />);
    strictEqual(result, '<section></section>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<section></section>);
    strictEqual(result, '<section></section>');
  });
});
