import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <caption> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<caption />);
    strictEqual(result, '<caption></caption>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<caption></caption>);
    strictEqual(result, '<caption></caption>');
  });
});
