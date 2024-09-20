import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <pre> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<pre />);
    strictEqual(result, '<pre></pre>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<pre></pre>);
    strictEqual(result, '<pre></pre>');
  });
});
