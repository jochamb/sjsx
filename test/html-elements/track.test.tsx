import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <track> tag', () => {
  it('renders void element when self-closing tag', async () => {
    const { result } = await render(<track />);
    strictEqual(result, '<track>');
  });

  it('renders void element when default html closing tag', async () => {
    const { result } = await render(<track></track>);
    strictEqual(result, '<track>');
  });
});
