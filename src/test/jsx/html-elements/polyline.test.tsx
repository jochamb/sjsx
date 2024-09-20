import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <polyline> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<polyline />);
    strictEqual(result, '<polyline></polyline>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<polyline></polyline>);
    strictEqual(result, '<polyline></polyline>');
  });
});
