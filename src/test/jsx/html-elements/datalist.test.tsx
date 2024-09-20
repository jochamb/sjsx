import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <datalist> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<datalist />);
    strictEqual(result, '<datalist></datalist>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<datalist></datalist>);
    strictEqual(result, '<datalist></datalist>');
  });
});
