import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <progress> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<progress />);
    strictEqual(result, '<progress></progress>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<progress></progress>);
    strictEqual(result, '<progress></progress>');
  });
});
