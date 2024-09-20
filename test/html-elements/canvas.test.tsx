import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <canvas> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<canvas />);
    strictEqual(result, '<canvas></canvas>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<canvas></canvas>);
    strictEqual(result, '<canvas></canvas>');
  });
});
