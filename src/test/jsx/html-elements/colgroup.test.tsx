import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <colgroup> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<colgroup />);
    strictEqual(result, '<colgroup></colgroup>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<colgroup></colgroup>);
    strictEqual(result, '<colgroup></colgroup>');
  });
});
