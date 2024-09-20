import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <commands> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<commands />);
    strictEqual(result, '<commands></commands>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<commands></commands>);
    strictEqual(result, '<commands></commands>');
  });
});
