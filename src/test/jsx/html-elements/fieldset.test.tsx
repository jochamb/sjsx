import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <fieldset> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<fieldset />);
    strictEqual(result, '<fieldset></fieldset>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<fieldset></fieldset>);
    strictEqual(result, '<fieldset></fieldset>');
  });
});
