import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <dl> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<dl />);
    strictEqual(result, '<dl></dl>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<dl></dl>);
    strictEqual(result, '<dl></dl>');
  });
});
