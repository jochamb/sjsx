import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <img> tag', () => {
  it('renders void element when self-closing tag', async () => {
    const { result } = await render(<img />);
    strictEqual(result, '<img>');
  });

  it('renders void element when default html closing tag', async () => {
    const { result } = await render(<img></img>);
    strictEqual(result, '<img>');
  });
});
