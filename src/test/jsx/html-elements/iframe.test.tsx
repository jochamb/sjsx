import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <iframe> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<iframe />);
    strictEqual(result, '<iframe></iframe>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<iframe></iframe>);
    strictEqual(result, '<iframe></iframe>');
  });
});
