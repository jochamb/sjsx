import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <animateMotion> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<animateMotion />);
    strictEqual(result, '<animateMotion></animateMotion>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<animateMotion></animateMotion>);
    strictEqual(result, '<animateMotion></animateMotion>');
  });
});
