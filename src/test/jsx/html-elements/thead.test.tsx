import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <thead> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<thead />);
    strictEqual(result, '<thead></thead>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<thead></thead>);
    strictEqual(result, '<thead></thead>');
  });
});
