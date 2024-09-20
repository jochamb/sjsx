import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <tbody> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<tbody />);
    strictEqual(result, '<tbody></tbody>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<tbody></tbody>);
    strictEqual(result, '<tbody></tbody>');
  });
});
