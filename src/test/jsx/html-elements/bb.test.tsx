import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <bb> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<bb />);
    strictEqual(result, '<bb></bb>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<bb></bb>);
    strictEqual(result, '<bb></bb>');
  });
});
