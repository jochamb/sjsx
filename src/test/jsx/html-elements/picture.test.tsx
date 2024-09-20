import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <picture> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<picture />);
    strictEqual(result, '<picture></picture>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<picture></picture>);
    strictEqual(result, '<picture></picture>');
  });
});
