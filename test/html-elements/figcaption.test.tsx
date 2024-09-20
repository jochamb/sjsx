import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <figcaption> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<figcaption />);
    strictEqual(result, '<figcaption></figcaption>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<figcaption></figcaption>);
    strictEqual(result, '<figcaption></figcaption>');
  });
});
