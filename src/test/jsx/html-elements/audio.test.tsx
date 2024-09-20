import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <audio> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<audio />);
    strictEqual(result, '<audio></audio>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<audio></audio>);
    strictEqual(result, '<audio></audio>');
  });
});
