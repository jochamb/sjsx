import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <feDisplacementMap> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<feDisplacementMap />);
    strictEqual(result, '<feDisplacementMap></feDisplacementMap>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<feDisplacementMap></feDisplacementMap>);
    strictEqual(result, '<feDisplacementMap></feDisplacementMap>');
  });
});
