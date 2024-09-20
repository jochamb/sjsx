import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <rp> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<rp />);
    strictEqual(result, '<rp></rp>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<rp></rp>);
    strictEqual(result, '<rp></rp>');
  });
});
