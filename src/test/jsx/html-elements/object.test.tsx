import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <object> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<object />);
    strictEqual(result, '<object></object>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<object></object>);
    strictEqual(result, '<object></object>');
  });
});
