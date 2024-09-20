// docs: https://www.typescriptlang.org/docs/handbook/jsx.html

import { renderJSX, renderFragment } from '@jochamb/sjsx/renderer';
import { JSXNode, RenderedJSX } from '@jochamb/sjsx/types';

namespace JSX {
  export interface ElementChildrenAttribute {
    children?: JSXNode | JSXNode[] | undefined;
  }

  interface IntrinsicAttributes {
    /**
     * `key` is React only, the need for keys does not exist in stateless-jsx as there is no virtual dom
     */
    key?: never;
  }

  interface HtmlElement extends ElementChildrenAttribute, IntrinsicAttributes {
    accesskey?: string;
    contenteditable?: string;
    inputmode?:
      | undefined
      | 'none'
      | 'text'
      | 'decimal'
      | 'numeric'
      | 'tel'
      | 'search'
      | 'email'
      | 'url';
    dir?: string;
    'data-testid'?: string;
    hidden?: boolean;
    id?: number | string;
    role?: string;
    lang?: string;
    draggable?: string | boolean;
    spellcheck?: string | boolean;
    tabindex?: number | string;
    title?: string;
    translate?: string | boolean;
    style?: string;
    class?: never; // avoid reserved `class` collisions
    className?: string | undefined;
  }

  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
  interface HtmlAnchorElement extends HtmlElement {
    href?: string;
    hreflang?: string;
    target?: '_blank' | '_parent' | '_self' | '_top' | 'unfencedTop';
    download?: string;
    referrerpolicy?:
      | 'no-referrer'
      | 'no-referrer-when-downgrade'
      | 'origin'
      | 'origin-when-cross-origin'
      | 'same-origin'
      | 'strict-origin'
      | 'strict-origin-when-cross-origin'
      | 'unsafe-url';
    ping?: string;
    rel?: string;
    media?: string;
    type?: string;
  }

  interface HtmlAreaElement extends HtmlElement {
    alt?: string;
    coords?: string;
    shape?: string;
    href?: string;
    target?: string;
    ping?: string;
    rel?: string;
    media?: string;
    hreflang?: string;
    type?: string;
  }

  interface HtmlAudioElement extends HtmlElement {
    src?: string;
    autobuffer?: string;
    autoplay?: boolean;
    preload?: string;
    muted?: boolean;
    loop?: boolean;
    controls?: string;
  }

  interface BaseElement extends HtmlElement {
    href?: string;
    target?: string;
  }

  interface HtmlQuoteElement extends HtmlElement {
    cite?: string;
  }

  interface HtmlButtonElement extends HtmlElement {
    action?: string;
    autofocus?: string;
    disabled?: boolean;
    enctype?: string;
    form?: string;
    method?: string;
    name?: string;
    novalidate?: string | boolean;
    target?: string;
    type?: string;
    value?: string;
    formaction?: string;
    formenctype?: string;
    formmethod?: string;
    formnovalidate?: string | boolean;
    formtarget?: string;
    popovertarget?: string;
    popovertargetaction?: string;
  }

  interface HtmlDataListElement extends HtmlElement {}

  interface HtmlCanvasElement extends HtmlElement {
    width?: string;
    height?: string;
  }

  interface HtmlTableColElement extends HtmlElement {
    span?: string;
  }

  interface HtmlTableSectionElement extends HtmlElement {}

  interface HtmlTableRowElement extends HtmlElement {}

  interface DataElement extends HtmlElement {
    value?: string;
  }

  interface HtmlEmbedElement extends HtmlElement, Record<string, unknown> {
    src?: string;
    type?: string;
    width?: string;
    height?: string;
  }

  interface HtmlFieldSetElement extends HtmlElement {
    disabled?: boolean;
    form?: string;
    name?: string;
  }

  interface HtmlFormElement extends HtmlElement {
    'accept-charset'?: string;
    action?: string;
    autocomplete?: string;
    enctype?: string;
    method?: string;
    name?: string;
    novalidate?: string | boolean;
    target?: string;
  }

  interface HtmlHtmlElement extends HtmlElement {
    manifest?: string;
  }

  interface HtmlIFrameElement extends HtmlElement {
    allow?: string;
    allowfullscreen?: boolean;
    allowpaymentrequest?: boolean;
    credentialless?: boolean;
    height?: string;
    loading?: string;
    name?: string;
    referrerpolicy?:
      | undefined
      | ''
      | 'no-referrer'
      | 'no-referrer-when-downgrade'
      | 'origin'
      | 'origin-when-cross-origin'
      | 'same-origin'
      | 'strict-origin'
      | 'strict-origin-when-cross-origin'
      | 'unsafe-url';
    sandbox?: boolean;
    src?: string;
    srcdoc?: string;
    seamless?: string;
    width?: string;
  }

  interface HtmlImageElement extends HtmlElement {
    alt?: string;
    src?: string;
    crossorigin?: string;
    usemap?: string;
    ismap?: string;
    width?: number | string;
    height?: number | string;
    decoding?: 'sync' | 'async' | 'auto';
    loading?: 'eager' | 'lazy';
    srcset?: string;
  }

  interface HtmlInputElement extends HtmlElement {
    accept?: string;
    action?: string;
    alt?: string;
    autocomplete?: string;
    autofocus?: string;
    checked?: boolean;
    disabled?: boolean;
    enctype?: string;
    form?: string;
    height?: string;
    list?: string;
    max?: number | string;
    minlength?: number | string;
    maxlength?: number | string;
    method?: string;
    min?: number | string;
    multiple?: boolean;
    name?: string;
    novalidate?: boolean;
    pattern?: string;
    placeholder?: string;
    readonly?: boolean;
    required?: boolean;
    size?: string;
    src?: string;
    step?: string;
    target?: string;
    type?: string;
    value?: string;
    width?: string;
  }

  interface HtmlModElement extends HtmlElement {
    cite?: string;
    datetime?: string | Date;
  }

  interface KeygenElement extends HtmlElement {
    autofocus?: string;
    challenge?: string;
    disabled?: boolean;
    form?: string;
    keytype?: string;
    name?: string;
  }

  interface HtmlLabelElement extends HtmlElement {
    form?: string;
    for?: string;
  }

  interface HtmlLIElement extends HtmlElement {
    value?: string | number;
  }

  interface HtmlLinkElement extends HtmlElement {
    href?: string;
    crossorigin?: string;
    rel?: string;
    as?: string;
    media?: string;
    hreflang?: string;
    type?: string;
    sizes?: string;
    integrity?: string;
  }

  interface HtmlMapElement extends HtmlElement {
    name?: string;
  }

  interface HtmlMetaElement extends HtmlElement {
    name?: string;
    property?: string;
    'http-equiv'?: string;
    content?: string;
    charset?: string;
  }

  interface HtmlMeterElement extends HtmlElement {
    value?: string | number;
    min?: string | number;
    max?: string | number;
    low?: string | number;
    high?: string | number;
    optimum?: string | number;
  }

  interface HtmlObjectElement extends HtmlElement {
    data?: string;
    type?: string;
    name?: string;
    usemap?: string;
    form?: string;
    width?: string;
    height?: string;
  }

  interface HtmlOListElement extends HtmlElement {
    reversed?: string;
    start?: string | number;
  }

  interface HtmlOptgroupElement extends HtmlElement {
    disabled?: boolean;
    label?: string;
  }

  interface HtmlOptionElement extends HtmlElement {
    disabled?: boolean;
    label?: string;
    selected?: boolean;
    value?: string;
  }

  interface HtmlOutputElement extends HtmlElement {
    for?: string;
    form?: string;
    name?: string;
  }

  interface HtmlParamElement extends HtmlElement {
    name?: string;
    value?: string;
  }

  interface HtmlPictureElement extends HtmlElement {}

  interface HtmlProgressElement extends HtmlElement {
    value?: string | number;
    max?: string | number;
  }

  interface HtmlCommandElement extends HtmlElement {
    type?: string;
    label?: string;
    icon?: string;
    disabled?: boolean;
    checked?: string;
    radiogroup?: string;
    default?: string;
  }

  interface HtmlLegendElement extends HtmlElement {}

  interface HtmlBrowserButtonElement extends HtmlElement {
    type?: string;
  }

  interface HtmlMenuElement extends HtmlElement {
    type?: string;
    label?: string;
  }

  interface HtmlScriptElement extends HtmlElement {
    src?: string;
    type?: string;
    charset?: string;
    async?: boolean;
    defer?: boolean;
    crossorigin?: string;
    integrity?: string;
    text?: string;
  }

  interface HtmlDetailsElement extends HtmlElement {
    open?: boolean;
  }

  interface HtmlDialogElement extends HtmlElement {
    open?: boolean;
    onclose?: string;
  }

  interface HtmlSelectElement extends HtmlElement, FormEvents {
    autofocus?: boolean;
    disabled?: boolean;
    form?: string;
    multiple?: string;
    name?: string;
    required?: boolean;
    size?: string;
    autocomplete?: string;
  }

  interface HtmlSourceElement extends HtmlElement {
    src?: string;
    srcset?: string;
    type?: string;
    media?: string;
  }

  interface HtmlStyleElement extends HtmlElement {
    media?: string;
    type?: string;
    disabled?: boolean;
    scoped?: string;
  }

  interface HtmlTableElement extends HtmlElement {}

  interface HtmlTableDataCellElement extends HtmlElement {
    colspan?: string | number;
    rowspan?: string | number;
    headers?: string;
  }

  interface HtmlTextAreaElement extends HtmlElement {
    autofocus?: string;
    cols?: string;
    dirname?: string;
    disabled?: boolean;
    form?: string;
    maxlength?: number | string;
    minlength?: number | string;
    name?: string;
    placeholder?: string;
    readonly?: boolean;
    required?: boolean;
    rows?: string;
    wrap?: string;
  }

  interface HtmlTableHeaderCellElement extends HtmlElement {
    colspan?: string | number;
    rowspan?: string | number;
    headers?: string;
    scope?: string;
  }

  interface HtmlTimeElement extends HtmlElement {
    datetime?: string | Date;
  }

  interface HtmlTrackElement extends HtmlElement {
    default?: string;
    kind?: string;
    label?: string;
    src?: string;
    srclang?: string;
  }

  interface HtmlVideoElement extends HtmlElement {
    src?: string;
    poster?: string;
    autobuffer?: string;
    autoplay?: boolean;
    loop?: boolean;
    controls?: boolean;
    width?: string;
    height?: string;
  }

  // todo: figure out which svg attributes need to be typed here
  interface HtmlSvgElement extends HtmlElement, Record<string, unknown> {}

  interface FormEvents {
    onblur?: string;
    onchange?: string;
    onfocus?: string;
    onformchange?: string;
    onforminput?: string;
    oninput?: string;
    oninvalid?: string;
    onselect?: string;
    onsubmit?: string;
  }

  interface HtmlInputElement extends FormEvents {}

  interface HtmlFieldSetElement extends FormEvents {}

  interface HtmlFormElement extends FormEvents {}

  interface MediaEvents {
    onabort?: string;
    oncanplay?: string;
    oncanplaythrough?: string;
    ondurationchange?: string;
    onemptied?: string;
    onended?: string;
    onerror?: string;
    onloadeddata?: string;
    onloadedmetadata?: string;
    onloadstart?: string;
    onpause?: string;
    onplay?: string;
    onplaying?: string;
    onprogress?: string;
    onratechange?: string;
    onreadystatechange?: string;
    onseeked?: string;
    onseeking?: string;
    onstalled?: string;
    onsuspend?: string;
    ontimeupdate?: string;
    onvolumechange?: string;
    onwaiting?: string;
  }

  interface HtmlAudioElement extends MediaEvents {}

  interface HtmlEmbedElement extends MediaEvents {}

  interface HtmlImageElement extends MediaEvents {}

  interface HtmlObjectElement extends MediaEvents {}

  interface HtmlVideoElement extends MediaEvents {}

  export interface IntrinsicElements {
    a: HtmlAnchorElement;
    abbr: HtmlElement;
    address: HtmlElement;
    animate: HtmlSvgElement;
    animateMotion: HtmlSvgElement;
    animateTransform: HtmlSvgElement;
    area: HtmlAreaElement;
    article: HtmlElement;
    aside: HtmlElement;
    audio: HtmlAudioElement;
    b: HtmlElement;
    base: BaseElement;
    bb: HtmlBrowserButtonElement;
    bdi: HtmlElement;
    bdo: HtmlElement;
    blockquote: HtmlQuoteElement;
    body: HtmlElement;
    br: HtmlElement;
    button: HtmlButtonElement;
    canvas: HtmlCanvasElement;
    caption: HtmlElement;
    circle: HtmlSvgElement;
    cite: HtmlElement;
    clipPath: HtmlSvgElement;
    code: HtmlElement;
    col: HtmlTableColElement;
    colgroup: HtmlTableColElement;
    commands: HtmlCommandElement;
    data: DataElement;
    datalist: HtmlDataListElement;
    dd: HtmlElement;
    defs: HtmlSvgElement;
    del: HtmlModElement;
    desc: HtmlSvgElement;
    details: HtmlDetailsElement;
    dfn: HtmlElement;
    dialog: HtmlDialogElement;
    div: HtmlElement;
    dl: HtmlElement;
    dt: HtmlElement;
    ellipse: HtmlSvgElement;
    em: HtmlElement;
    embed: HtmlEmbedElement;
    feBlend: HtmlSvgElement;
    feColorMatrix: HtmlSvgElement;
    feComponentTransfer: HtmlSvgElement;
    feComposite: HtmlSvgElement;
    feConvolveMatrix: HtmlSvgElement;
    feDiffuseLighting: HtmlSvgElement;
    feDisplacementMap: HtmlSvgElement;
    feDistantLight: HtmlSvgElement;
    feDropShadow: HtmlSvgElement;
    feFlood: HtmlSvgElement;
    feFuncA: HtmlSvgElement;
    feFuncB: HtmlSvgElement;
    feFuncG: HtmlSvgElement;
    feFuncR: HtmlSvgElement;
    feGaussianBlur: HtmlSvgElement;
    feImage: HtmlSvgElement;
    feMerge: HtmlSvgElement;
    feMergeNode: HtmlSvgElement;
    feMorphology: HtmlSvgElement;
    feOffset: HtmlSvgElement;
    fePointLight: HtmlSvgElement;
    feSpecularLighting: HtmlSvgElement;
    feSpotLight: HtmlSvgElement;
    feTile: HtmlSvgElement;
    feTurbulence: HtmlSvgElement;
    fieldset: HtmlFieldSetElement;
    figcaption: HtmlElement;
    figure: HtmlElement;
    filter: HtmlSvgElement;
    footer: HtmlElement;
    foreignObject: HtmlSvgElement;
    form: HtmlFormElement;
    g: HtmlSvgElement;
    h1: HtmlElement;
    h2: HtmlElement;
    h3: HtmlElement;
    h4: HtmlElement;
    h5: HtmlElement;
    h6: HtmlElement;
    head: HtmlElement;
    header: HtmlElement;
    hgroup: HtmlElement;
    hr: HtmlElement;
    html: HtmlHtmlElement;
    i: HtmlElement;
    iframe: HtmlIFrameElement;
    image: HtmlSvgElement;
    img: HtmlImageElement;
    input: HtmlInputElement;
    ins: HtmlModElement;
    kbd: HtmlElement;
    keygen: KeygenElement;
    label: HtmlLabelElement;
    legend: HtmlLegendElement;
    li: HtmlLIElement;
    line: HtmlSvgElement;
    linearGradient: HtmlSvgElement;
    link: HtmlLinkElement;
    main: HtmlElement;
    map: HtmlMapElement;
    mark: HtmlElement;
    marker: HtmlSvgElement;
    mask: HtmlSvgElement;
    menu: HtmlMenuElement;
    meta: HtmlMetaElement;
    metadata: HtmlSvgElement;
    meter: HtmlMeterElement;
    mpath: HtmlSvgElement;
    nav: HtmlElement;
    noscript: HtmlElement;
    object: HtmlObjectElement;
    ol: HtmlOListElement;
    optgroup: HtmlOptgroupElement;
    option: HtmlOptionElement;
    output: HtmlOutputElement;
    p: HtmlElement;
    param: HtmlParamElement;
    path: HtmlSvgElement;
    pattern: HtmlSvgElement;
    picture: HtmlPictureElement;
    polygon: HtmlSvgElement;
    polyline: HtmlSvgElement;
    pre: HtmlElement;
    progress: HtmlProgressElement;
    q: HtmlQuoteElement;
    radialGradient: HtmlSvgElement;
    rb: HtmlElement;
    rect: HtmlSvgElement;
    rp: HtmlElement;
    rt: HtmlElement;
    rtc: HtmlElement;
    ruby: HtmlElement;
    s: HtmlElement;
    samp: HtmlElement;
    script: HtmlScriptElement;
    section: HtmlElement;
    select: HtmlSelectElement;
    set: HtmlSvgElement;
    small: HtmlElement;
    source: HtmlSourceElement;
    span: HtmlElement;
    stop: HtmlSvgElement;
    strong: HtmlElement;
    style: HtmlStyleElement;
    sub: HtmlElement;
    summary: HtmlElement;
    sup: HtmlElement;
    svg: HtmlSvgElement;
    switch: HtmlSvgElement;
    symbol: HtmlSvgElement;
    table: HtmlTableElement;
    tbody: HtmlElement;
    td: HtmlTableDataCellElement;
    template: HtmlElement;
    text: HtmlSvgElement;
    textarea: HtmlTextAreaElement;
    textPath: HtmlSvgElement;
    tfoot: HtmlTableSectionElement;
    th: HtmlTableHeaderCellElement;
    thead: HtmlTableSectionElement;
    time: HtmlTimeElement;
    title: HtmlElement;
    tr: HtmlTableRowElement;
    track: HtmlTrackElement;
    tspan: HtmlSvgElement;
    u: HtmlElement;
    ul: HtmlElement;
    use: HtmlSvgElement;
    var: HtmlElement;
    video: HtmlVideoElement;
    view: HtmlSvgElement;
    wbr: HtmlElement;
  }

  export type HTMLAttributes = Record<string, JSXNode | JSXNode[] | undefined> &
    ElementChildrenAttribute;

  export type Element = RenderedJSX | Promise<RenderedJSX>;
}

export type { JSX };

export const jsx = renderJSX;
export const jsxs = renderJSX;
export const jsxDEV = renderJSX;
export const Fragment = renderFragment;
