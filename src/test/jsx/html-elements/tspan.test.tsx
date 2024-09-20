import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <tspan> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<tspan />);
    strictEqual(result, '<tspan></tspan>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<tspan></tspan>);
    strictEqual(result, '<tspan></tspan>');
  });
});
