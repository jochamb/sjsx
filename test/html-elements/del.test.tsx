import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <del> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<del />);
    strictEqual(result, '<del></del>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<del></del>);
    strictEqual(result, '<del></del>');
  });
});
