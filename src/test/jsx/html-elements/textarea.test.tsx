import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <textarea> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<textarea />);
    strictEqual(result, '<textarea></textarea>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<textarea></textarea>);
    strictEqual(result, '<textarea></textarea>');
  });
});
