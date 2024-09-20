import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <feComposite> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<feComposite />);
    strictEqual(result, '<feComposite></feComposite>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<feComposite></feComposite>);
    strictEqual(result, '<feComposite></feComposite>');
  });
});
