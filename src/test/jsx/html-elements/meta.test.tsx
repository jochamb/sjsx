import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <meta> tag', () => {
  it('renders void element when self-closing tag', async () => {
    const { result } = await render(<meta />);
    strictEqual(result, '<meta>');
  });

  it('renders void element when default html closing tag', async () => {
    const { result } = await render(<meta></meta>);
    strictEqual(result, '<meta>');
  });
});
