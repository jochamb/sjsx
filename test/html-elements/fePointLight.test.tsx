import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <fePointLight> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<fePointLight />);
    strictEqual(result, '<fePointLight></fePointLight>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<fePointLight></fePointLight>);
    strictEqual(result, '<fePointLight></fePointLight>');
  });
});
