import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <animateTransform> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<animateTransform />);
    strictEqual(result, '<animateTransform></animateTransform>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<animateTransform></animateTransform>);
    strictEqual(result, '<animateTransform></animateTransform>');
  });
});
