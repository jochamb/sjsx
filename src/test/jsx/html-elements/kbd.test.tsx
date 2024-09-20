import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <kbd> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<kbd />);
    strictEqual(result, '<kbd></kbd>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<kbd></kbd>);
    strictEqual(result, '<kbd></kbd>');
  });
});
