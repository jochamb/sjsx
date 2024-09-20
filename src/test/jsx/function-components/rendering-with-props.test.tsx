import { describe, it } from 'node:test';
import { strictEqual, rejects } from 'node:assert';
import { render } from '@sjsx/testing-library';

describe(`rendering with props`, () => {
  it('handles strings', async () => {
    const Component = () => <p className="font-black focus-visible:bg-amber-200">basic</p>;
    const { result } = await render(<Component />);
    strictEqual(result, `<p class="font-black focus-visible:bg-amber-200">basic</p>`);
  });
  //
  it('handles numbers', async () => {
    const Component = () => <p data-value={123}>basic</p>;
    const { result } = await render(<Component />);
    strictEqual(result, `<p data-value="123">basic</p>`);
  });

  it('handles big ints', async () => {
    const Component = () => <p data-value={123n}>basic</p>;
    const { result } = await render(<Component />);
    strictEqual(result, `<p data-value="123">basic</p>`);
  });

  it('should render a simple html tag with a boolean prop', async () => {
    const Component = () => (
      <p data-good={true} sj-stateful data-bad={false}>
        basic
      </p>
    );
    const { result } = await render(<Component />);
    strictEqual(result, `<p data-good sj-stateful>basic</p>`);
  });

  it('handles functions (remove?)', async () => {
    const Component = () => <p data-value={() => 'run me'}>basic</p>;
    const { result } = await render(<Component />);
    strictEqual(result, `<p data-value="run me">basic</p>`);
  });

  it('handles null', async () => {
    const Component = () => <p data-value={null}>basic</p>;
    const { result } = await render(<Component />);
    strictEqual(result, `<p data-value="">basic</p>`);
  });

  it('handles undefined', async () => {
    const Component = () => <p data-value={undefined}>basic</p>;
    const { result } = await render(<Component />);
    strictEqual(result, `<p data-value="">basic</p>`);
  });

  it('maintains attribute casing', async () => {
    const Component = () => <p DaTa-VaLuE={undefined}>basic</p>;
    const { result } = await render(<Component />);
    strictEqual(result, `<p DaTa-VaLuE="">basic</p>`);
  });

  it('should throw when trying to render an invalid type as a prop value', () => {
    const Component = () => <p data-value={{ not: 'good' }}>basic</p>;
    rejects(() => render(<Component />), /SerializationError/);
  });
});
