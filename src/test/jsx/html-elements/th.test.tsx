import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <th> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<th />);
    strictEqual(result, '<th></th>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<th></th>);
    strictEqual(result, '<th></th>');
  });
});
