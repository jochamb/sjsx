import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <mpath> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<mpath />);
    strictEqual(result, '<mpath></mpath>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<mpath></mpath>);
    strictEqual(result, '<mpath></mpath>');
  });
});
