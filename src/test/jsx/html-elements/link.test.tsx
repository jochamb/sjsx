import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <link> tag', () => {
  it('renders void element when self-closing tag', async () => {
    const { result } = await render(<link />);
    strictEqual(result, '<link>');
  });

  it('renders void element when default html closing tag', async () => {
    const { result } = await render(<link></link>);
    strictEqual(result, '<link>');
  });
});
