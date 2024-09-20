import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <ellipse> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<ellipse />);
    strictEqual(result, '<ellipse></ellipse>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<ellipse></ellipse>);
    strictEqual(result, '<ellipse></ellipse>');
  });
});
