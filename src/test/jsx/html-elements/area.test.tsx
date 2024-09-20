import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <area> tag', () => {
  it('renders void element when self-closing tag', async () => {
    const { result } = await render(<area />);
    strictEqual(result, '<area>');
  });

  it('renders void element when default html closing tag', async () => {
    const { result } = await render(<area></area>);
    strictEqual(result, '<area>');
  });
});
