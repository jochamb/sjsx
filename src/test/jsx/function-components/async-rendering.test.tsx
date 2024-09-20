import { describe, it } from 'node:test';
import { strictEqual, rejects } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe(`async rendering`, () => {
  it('renders', async () => {
    async function Component() {
      const asyncValue = await new Promise<string>((resolve) => {
        setTimeout(() => {
          resolve('cool');
        }, 7);
      });

      return <div>{asyncValue}</div>;
    }

    const { result } = await render(<Component />);
    strictEqual(result, '<div>cool</div>');
  });

  it('handles thrown errors', async () => {
    async function Component() {
      const asyncValue = await new Promise<string>((_, reject) => {
        setTimeout(() => {
          reject(new Error('bad'));
        }, 7);
      });

      return <div>{asyncValue}</div>;
    }

    await rejects(() => render(<Component />), /bad/);
  });
});
