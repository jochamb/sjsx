import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <style> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<style />);
    strictEqual(result, '<style></style>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<style></style>);
    strictEqual(result, '<style></style>');
  });
});
