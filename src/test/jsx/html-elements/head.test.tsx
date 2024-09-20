import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library';

describe('html <head> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<head />);
    strictEqual(result, '<head></head>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<head></head>);
    strictEqual(result, '<head></head>');
  });
});
