import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <abbr> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<abbr />);
    strictEqual(result, '<abbr></abbr>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<abbr></abbr>);
    strictEqual(result, '<abbr></abbr>');
  });
});
