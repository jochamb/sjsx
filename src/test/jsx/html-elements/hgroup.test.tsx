import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <hgroup> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<hgroup />);
    strictEqual(result, '<hgroup></hgroup>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<hgroup></hgroup>);
    strictEqual(result, '<hgroup></hgroup>');
  });
});
