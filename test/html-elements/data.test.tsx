import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <data> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<data />);
    strictEqual(result, '<data></data>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<data></data>);
    strictEqual(result, '<data></data>');
  });
});
