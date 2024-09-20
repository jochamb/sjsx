import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe('html <video> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<video />);
    strictEqual(result, '<video></video>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<video></video>);
    strictEqual(result, '<video></video>');
  });
});
