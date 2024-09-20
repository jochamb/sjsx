import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <map> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<map />);
    strictEqual(result, '<map></map>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<map></map>);
    strictEqual(result, '<map></map>');
  });
});
