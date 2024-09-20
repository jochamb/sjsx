import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';

describe('html <rtc> tag', () => {
  it('renders when self-closing tag', async () => {
    const { result } = await renderToString(<rtc />);
    strictEqual(result, '<rtc></rtc>');
  });

  it('renders when default html closing tag', async () => {
    const { result } = await renderToString(<rtc></rtc>);
    strictEqual(result, '<rtc></rtc>');
  });
});
