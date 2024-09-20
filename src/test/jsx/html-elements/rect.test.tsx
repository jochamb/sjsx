import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <rect> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<rect />);
    strictEqual(result, '<rect></rect>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<rect></rect>);
    strictEqual(result, '<rect></rect>');
  });
});
