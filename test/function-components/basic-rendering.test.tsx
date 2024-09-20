import { describe, it } from 'node:test';
import { strictEqual, rejects } from 'node:assert';
import { renderToString } from '@jochamb/sjsx/render-to-string';
import { JSXNode } from '@jochamb/sjsx/types';

describe(`basic rendering`, () => {
  it('basic components', async () => {
    const { result } = await renderToString(<div>basic</div>);
    strictEqual(result, '<div>basic</div>');
  });

  it('nested components', async () => {
    const Component = () => (
      <div>
        <p>basic</p>
        <br />
      </div>
    );
    const rendered = await renderToString(<Component />);
    strictEqual(rendered.result, '<div><p>basic</p><br></div>');
  });

  it('handles self-closing to void element', async () => {
    const Component = () => <link />;
    const { result } = await renderToString(<Component />);
    strictEqual(result, '<link>');
  });

  it('handles self-closing to regular element', async () => {
    const Component = () => <div />;
    const { result } = await renderToString(<Component />);
    strictEqual(result, '<div></div>');
  });

  it('handles fragments', async () => {
    const Component = () => (
      <>
        <div>basic</div>
        <div>fragment</div>
      </>
    );
    const { result } = await renderToString(<Component />);
    strictEqual(result, '<div>basic</div><div>fragment</div>');
  });

  it('handles nested complex components', async () => {
    function Component1({ children }: { children: JSXNode[] }) {
      return <div>{children}</div>;
    }

    const Component2 = () => <p>basic</p>;
    const Component3 = () => (
      <>
        <div>
          <div>
            <div>
              <Component1>
                <span>so fancy</span>
                <p>nested childs</p>
              </Component1>
              <br />
              <script />
              <link></link>
              <a>
                <Component2 />
              </a>
            </div>
          </div>
        </div>
        <span>complex</span>
      </>
    );
    const { result } = await renderToString(<Component3 />);
    strictEqual(
      result,
      '<div><div><div><div><span>so fancy</span><p>nested childs</p></div><br><script></script><link><a><p>basic</p></a></div></div></div><span>complex</span>'
    );
  });

  it('handles all serializable values', async () => {
    const Component1 = () => <div>basic</div>;
    const Component2 = () => <div>still basic</div>;
    const Component3 = async () => <div>{await Promise.resolve('wow, much async')}</div>;
    const Component4 = () => (
      <div>
        <Component1 />
        <Component2 />
        <Component3 />
        {'escape me <div />'}
        {100}
        {1n}
        {false}
        {true}
        {null}
        {undefined}
        {{ dangerouslySetUnescapedHtml: '<script>log(`lol hacked`)</script>' }}
      </div>
    );
    const { result } = await renderToString(<Component4 />);
    strictEqual(
      result,
      '<div><div>basic</div><div>still basic</div><div>wow, much async</div>escape me &lt;div /&gt;1001falsetrue<script>log(`lol hacked`)</script></div>'
    );
  });

  it('handles non-serializable values', () => {
    // @ts-expect-error -- enforcing runtime error
    rejects(() => renderToString(<div>{{ bad: 'very' }}</div>), /SerializationError/);
  });
});
