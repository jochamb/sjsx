import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <defs> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<defs />);
    strictEqual(result, '<defs></defs>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<defs></defs>);
    strictEqual(result, '<defs></defs>');
  });
});
