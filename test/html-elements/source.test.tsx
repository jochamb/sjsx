import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <source> tag', () => {
  it('renders void element when self-closing tag', async () => {
    const { result } = await render(<source />);
    strictEqual(result, '<source>');
  });

  it('renders void element when default html closing tag', async () => {
    const { result } = await render(<source></source>);
    strictEqual(result, '<source>');
  });
});
