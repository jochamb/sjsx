import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <optgroup> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<optgroup />);
    strictEqual(result, '<optgroup></optgroup>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<optgroup></optgroup>);
    strictEqual(result, '<optgroup></optgroup>');
  });
});
