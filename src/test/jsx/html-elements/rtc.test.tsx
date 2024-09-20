import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { render } from '@jochamb/sjsx/testing-library.js';

describe('html <rtc> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await render(<rtc />);
    strictEqual(result, '<rtc></rtc>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await render(<rtc></rtc>);
    strictEqual(result, '<rtc></rtc>');
  });
});
