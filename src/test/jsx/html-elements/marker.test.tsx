import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <marker> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<marker />);
    strictEqual(result, '<marker></marker>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<marker></marker>);
    strictEqual(result, '<marker></marker>');
  });
});
