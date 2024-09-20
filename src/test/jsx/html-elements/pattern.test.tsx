import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <pattern> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<pattern />);
    strictEqual(result, '<pattern></pattern>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<pattern></pattern>);
    strictEqual(result, '<pattern></pattern>');
  });
});
