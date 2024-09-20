import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <ruby> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<ruby />);
    strictEqual(result, '<ruby></ruby>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<ruby></ruby>);
    strictEqual(result, '<ruby></ruby>');
  });
});
