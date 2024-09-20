import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <line> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<line />);
    strictEqual(result, '<line></line>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<line></line>);
    strictEqual(result, '<line></line>');
  });
});
