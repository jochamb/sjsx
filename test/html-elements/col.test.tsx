import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <col> tag', () => {
  it('renders void element when self-closing tag', async () => {
    const { result } = await render(<col />);
    strictEqual(result, '<col>');
  });

  it('renders void element when default html closing tag', async () => {
    const { result } = await render(<col></col>);
    strictEqual(result, '<col>');
  });
});
