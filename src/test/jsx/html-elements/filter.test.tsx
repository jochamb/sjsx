import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <filter> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<filter />);
    strictEqual(result, '<filter></filter>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<filter></filter>);
    strictEqual(result, '<filter></filter>');
  });
});
