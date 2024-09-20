import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <body> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<body />);
    strictEqual(result, '<body></body>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<body></body>);
    strictEqual(result, '<body></body>');
  });
});
