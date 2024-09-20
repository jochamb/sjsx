import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <feSpotLight> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<feSpotLight />);
    strictEqual(result, '<feSpotLight></feSpotLight>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<feSpotLight></feSpotLight>);
    strictEqual(result, '<feSpotLight></feSpotLight>');
  });
});
