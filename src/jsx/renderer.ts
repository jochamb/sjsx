import { JSX } from './jsx-runtime.js';
import { serializer } from './serializer.js';
import { FunctionComponent, RenderedJSX } from './types.js';

export function renderJSX(
  tag: string | FunctionComponent | undefined,
  attributes: JSX.HTMLAttributes,
  _key?: string
): JSX.Element {
  if (typeof tag === 'function') {
    return tag(attributes);
  } else if (tag === undefined) {
    return renderFragment(attributes);
  } else {
    const jsx = new RenderedJSX(
      renderTag(tag, renderAttributes(attributes), renderChildren(attributes))
    );

    if (jsx.result instanceof Promise) {
      return jsx.result.then((awaited) => {
        return new RenderedJSX(awaited);
      });
    }

    return jsx;
  }
}

export function renderFragment(attributes: JSX.HTMLAttributes) {
  const jsx = new RenderedJSX(renderChildren(attributes));

  if (jsx.result instanceof Promise) {
    return jsx.result.then((awaited) => {
      return new RenderedJSX(awaited);
    });
  }

  return jsx;
}

async function renderAttributes(attributes: JSX.HTMLAttributes) {
  const awaited = await Promise.all(
    Object.entries(attributes)
      .filter((attr) => attr[0] !== 'children')
      .map(async (attr) => {
        if (attr[0] === 'className') {
          attr[0] = 'class';
        }

        const value = await serializer(attr[1], escapeAttribute);

        if (value === 'true') {
          return attr[0];
        } else if (value === 'false') {
          return '';
        }

        return `${attr[0]}="${value}"`;
      })
  );

  return awaited.join(' ');
}

async function renderChildren({ children }: JSX.HTMLAttributes) {
  if (!children) {
    return '';
  }

  const awaited = await Promise.all(
    (Array.isArray(children) ? children : [children]).map((c) => serializer(c, escapeHtml))
  );

  return awaited.join('');
}

async function renderTag(tag: string, attributes: Promise<string>, children: Promise<string>) {
  const [attrs, childs] = await Promise.all([attributes, children]);

  const tagWithAttributes = [tag, attrs].join(' ').trim();

  if (childs.length !== 0) {
    return `<${tagWithAttributes}>${childs}</${tag}>`; // <div>{children}</div>
  } else {
    if (isVoidElement(tag)) {
      return `<${tagWithAttributes}>`; // <link /> -> <link>
    } else {
      return `<${tagWithAttributes}></${tag}>`; // <script /> -> <script></script>
    }
  }
}

function escapeAttribute(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('\n', '&#10;')
    .trim();
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('\n', '<br/>')
    .trim();
}

// https://html.spec.whatwg.org/multipage/syntax.html#elements-2
function isVoidElement(tag: string) {
  return (
    tag === 'area' ||
    tag === 'base' ||
    tag === 'br' ||
    tag === 'col' ||
    tag === 'embed' ||
    tag === 'hr' ||
    tag === 'img' ||
    tag === 'input' ||
    tag === 'link' ||
    tag === 'meta' ||
    tag === 'source' ||
    tag === 'track' ||
    tag === 'wbr'
  );
}
