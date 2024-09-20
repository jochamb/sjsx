import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <u> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<u />);
    strictEqual(result, '<u></u>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<u></u>);
    strictEqual(result, '<u></u>');
  });
});
