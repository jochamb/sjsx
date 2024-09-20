import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <template> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<template />);
    strictEqual(result, '<template></template>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<template></template>);
    strictEqual(result, '<template></template>');
  });
});
