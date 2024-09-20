import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <metadata> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<metadata />);
    strictEqual(result, '<metadata></metadata>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<metadata></metadata>);
    strictEqual(result, '<metadata></metadata>');
  });
});
