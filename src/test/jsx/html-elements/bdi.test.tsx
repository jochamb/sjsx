import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <bdi> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<bdi />);
    strictEqual(result, '<bdi></bdi>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<bdi></bdi>);
    strictEqual(result, '<bdi></bdi>');
  });
});
