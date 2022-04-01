var e = Object.defineProperty,
  t = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  r = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  n = Object.prototype.propertyIsEnumerable,
  l = (t, a, r) =>
    a in t
      ? e(t, a, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[a] = r),
  i = (e, t) => {
    for (var a in t || (t = {})) s.call(t, a) && l(e, a, t[a]);
    if (r) for (var a of r(t)) n.call(t, a) && l(e, a, t[a]);
    return e;
  },
  o = (e, r) => t(e, a(r)),
  c = (e, t) => {
    var a = {};
    for (var l in e) s.call(e, l) && t.indexOf(l) < 0 && (a[l] = e[l]);
    if (null != e && r)
      for (var l of r(e)) t.indexOf(l) < 0 && n.call(e, l) && (a[l] = e[l]);
    return a;
  };
import {
  P as m,
  g as d,
  r as p,
  c as h,
  d as g,
  e as x,
  a as u,
  C as f,
  W as v,
  s as E,
  u as w,
  b as N,
  f as y,
  R as b,
  m as k,
  v as j,
  L as I,
  h as M,
  A as D,
  Z as F,
  l as C,
  i as z,
  j as R,
  k as S,
  n as A,
  o as $,
  p as L,
  q as P,
  t as T,
  w as _,
  x as B,
  V as G,
  y as O,
  z as H,
  H as X,
  B as U,
  D as Y,
  T as q,
  E as V,
  F as Z,
  G as W,
  I as K,
  J,
  K as Q,
  O as ee,
  M as te,
  N as ae,
  Q as re,
  S as se,
  U as ne,
  X as le,
  Y as ie,
  _ as oe,
  $ as ce,
  a0 as me,
  a1 as de,
} from "./vendor.3ffe77f8.js";
!(function () {
  const e = document.createElement("link").relList;
  if (!(e && e.supports && e.supports("modulepreload"))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
      t(e);
    new MutationObserver((e) => {
      for (const a of e)
        if ("childList" === a.type)
          for (const e of a.addedNodes)
            "LINK" === e.tagName && "modulepreload" === e.rel && t(e);
    }).observe(document, { childList: !0, subtree: !0 });
  }
  function t(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = (function (e) {
      const t = {};
      return (
        e.integrity && (t.integrity = e.integrity),
        e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
        "use-credentials" === e.crossorigin
          ? (t.credentials = "include")
          : "anonymous" === e.crossorigin
          ? (t.credentials = "omit")
          : (t.credentials = "same-origin"),
        t
      );
    })(e);
    fetch(e.href, t);
  }
})(),
  m.start(),
  (m.bar.update = function (e) {
    return m.trigger("update", e), (this.progress = e), this.render();
  });
const pe = document.querySelector(".percentage"),
  he = document.querySelector(".line"),
  ge = document.querySelector(".loader");
let xe = !1;
m.on("update", (e) => {
  (pe.innerHTML = e.toFixed(0) + "%"),
    (he.style.width = e.toFixed(0) + "%"),
    window.hasMounted &&
      (xe ||
        ((xe = !0),
        d.to(".loader", {
          opacity: 0,
          duration: 0.6,
          onComplete: () => d.set(ge, { display: "none" }),
        })));
});
const ue = p.exports.createRef(!1),
  fe = h(
    g((e, t) => ({
      isMenuOpen: !1,
      toggleMenu: () => {
        t().isMenuOpen
          ? u()
          : x(document.querySelector("[data-app-container]")),
          e((e) => ({ isMenuOpen: !e.isMenuOpen }));
      },
      isDarkMode:
        null === localStorage.getItem("dark-mode-enabled") ||
        !!JSON.parse(localStorage.getItem("dark-mode-enabled")),
      toggleDarkMode: () => {
        localStorage.setItem("dark-mode-enabled", !t().isDarkMode),
          e((e) => ({ isDarkMode: !e.isDarkMode }));
      },
      activeColorIndex:
        null === localStorage.getItem("color-index")
          ? 0
          : JSON.parse(localStorage.getItem("color-index")),
      setActiveColorIndex: (t) => {
        localStorage.setItem("color-index", t), e({ activeColorIndex: t });
      },
    }))
  );
var ve = "/assets/display-new.d208980b.otf",
  Ee = f`
  /* TYPO */
  .text-h1 {
    font-family: NeueMontrealRegular;
    font-style: normal;
    font-weight: normal;
    font-size: 100px;
    color: ${({ theme: e }) => e.colors.text.standard};
    line-height: 0.9;
    /* or 101px */
    letter-spacing: 0.03em;

    @media (max-width: 769px) {
      font-size: 60px;
      font-size: 60px;
    }

    @media (max-width: 480px) {
      font-size: 40px;
      line-height: 1.1;
    }
  }
  .text-h2 {
    font-family: "Ginger";
    /* font-family: NeueMontrealRegular; */
    font-size: 60px;
    color: ${({ theme: e }) => e.colors.text.standard};
    letter-spacing: 0;
    //margin-bottom: 10px;
    span.important_word {
      font-family: "Ginger";
      color: ${({ theme: e }) => e.colors.primary1};
      font-size: 60px;
    }

    @media (max-width: 769px) {
      font-size: 44px;
    }

    @media (max-width: 480px) {
      font-size: 44px;
    }
  }
  .text-h2-5 {
    font-family: "NeueMontrealRegular";
    font-size: 40px;
    line-height: 1.1;
    color: ${({ theme: e }) => e.colors.text.standard};
    span.important_word {
      font-family: "Ginger";
      color: ${({ theme: e }) => e.colors.primary1};
      font-size: 60px;
    }

    @media (max-width: 769px) {
      font-size: 30px;
    }

    @media (max-width: 480px) {
      font-size: 24px;
      line-height: 1.2;
    }
  }
  .text-h3 {
    font-family: "NeueMontrealRegular";
    font-size: 30px;
    color: ${({ theme: e }) => e.colors.text.standard};
  }
  .text-h4 {
    font-family: "NeueMontrealRegular";
    color: ${({ theme: e }) => e.colors.text.standard};
    font-size: 20px;
    font-family: 6px;
    line-height: 1.2;
    @media (max-width: 769px) {
      font-size: 24px;
    }
  }
  .text-h5 {
    font-family: "Ginger";
    font-size: 24px;
    line-height: 1.4;
    color: ${({ theme: e }) => e.colors.text.standard};
    @media (max-width: 480px) {
      font-size: 26px;
    }
  }
  .text-h6 {
    font-family: "NeueMontrealRegular";
    color: ${({ theme: e }) => e.colors.text.standard};
    font-size: 14px;
    line-height: 1.4;
    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
  .text-regular {
    color: ${({ theme: e }) => e.colors.text.standard};
    // letter-spacing: 0.2rem;
    line-height: 1.28;
    font-size: 14px;
    opacity: 0.8;
    font-family: "NeueMontrealRegular";
  }
  .text-small {
    font-family: NeueMontrealRegular;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 140.62%;
    /* identical to box height, or 20px */
    letter-spacing: 0.01em;
  }

  .text-button {
    font-family: GilroyMedium;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 140.62%;
    /* identical to box height, or 20px */
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .text-spawn-anim {
    display: inline-block;
    overflow: hidden;
  }

  .text-description{
    font-family: "NeueMontrealRegular";
    color: ${({ theme: e }) => e.colors.text.standard};
    margin: 20px 0px;
    font-size: 18px;
    line-height: 1.3;
    opacity: 1;
    @media (max-width: 600px) {
      margin: 10px 0px;
    }
    a{
      color: ${({ theme: e }) => e.colors.text.standard};
    }
  }

  .text-link{
    color: ${({ theme: e }) => e.colors.text.standard};
    font-family: NeueMontrealRegular;
  }

  .button{
    border: solid 1px ${({ theme: e }) => e.colors.text.disabled};
    padding: 15px 50px;
    border-radius: 30px;
    color: ${({ theme: e }) => e.colors.text.standard};
    font-family: NeueMontrealRegular;
    text-transform: uppercase;
    font-size: 14px;
    margin-top: 40px;
    transition: background-color 0.5s;
    &:hover{
      background-color:  ${({ theme: e }) => e.colors.primary1};
      color:  ${({ theme: e }) => e.colors.text.standard};
    }
  }

  /* SIZES */
  .spacer {
    height: 20vh;
    @media screen and (max-width: 768px) {
      height: 10vh;
    }
  }
  .demi-spacer {
    height: 10vh;
    @media screen and (max-width: 768px) {
      height: 5vh;
    }
  }
  .big-spacer {
    height: 40vh;
    @media screen and (max-width: 768px) {
      height: 25vh;
    }
  }
  .margin-small {
    margin: 8px;
    @media screen and (min-width: 480px) {
      margin: 12px;
    }
    @media screen and (min-width: 768px) {
      margin: 12px;
    }
    @media screen and (min-width: 1024px) {
      margin: 18px;
    }
    @media screen and (min-width: 1200px) {
      margin: 20px;
    }
    @media screen and (min-width: 1600px) {
      margin: 2vw;
    }
  }

  /* SECTIONS */
`;
const we = f`
  padding: 0 10vw;

  @media (max-width: 769px) {
    padding: 0 40px;
  }

  @media (max-width: 480px) {
    padding: 0 28px;
  }
`,
  Ne = f`
  padding: 0 5vw;

  @media (max-width: 769px) {
    padding: 0 40px;
  }

  @media (max-width: 480px) {
    padding: 0 28px;
  }
`;
var ye = v`
    /* CSS RESET */
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
    display: block;
    }
    body {
    line-height: 1;
    }
    ol,
    ul {
    list-style: none;
    }
    blockquote,
    q {
    quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
    content: "";
    content: none;
    }
    table {
    border-collapse: collapse;
    border-spacing: 0;
    }
    button,
    input,
    optgroup,
    select,
    textarea,html input[type="button"],
    input[type="reset"],
    input[type="submit"],button[disabled],
    html input[disabled],button::-moz-focus-inner,
    input::-moz-focus-inner, input[type="checkbox"],
    input[type="radio"], input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button, input[type="search"], input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-decoration {
      border:none;
      background-image:none;
      background-color:transparent;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
    }
    

    button {
      border: none;
      margin: 0;
      padding: 0;
      width: auto;
      overflow: visible;

      background: transparent;

      /* inherit font & color from ancestor */
      color: inherit;
      font: inherit;

      /* Normalize line-height. Cannot be changed from normal in Firefox 4+. */
      line-height: normal;

      /* Corrects font smoothing for webkit */
      -webkit-font-smoothing: inherit;
      -moz-osx-font-smoothing: inherit;

      /* Corrects inability to style clickable input types in iOS */
      -webkit-appearance: none;
    }

    a {
      text-decoration : none;
    }

    /* Remove excess padding and border in Firefox 4+ */
    &::-moz-focus-inner {
        border: 0;
        padding: 0;
    }

    /* FONTS */

    @font-face {
      font-family: "NeueMontrealLight";
      src: url(${"/assets/NeueMontreal-Light.d4b9992e.otf"});
    }
    @font-face {
      font-family: "NeueMontrealRegular";
      src: url(${"/assets/NeueMontreal-Regular.94bbc905.otf"});
    }
    @font-face {
      font-family: "SaolDisplayLight";
      src: url(${"/assets/SaolDisplay-Light.8909eef0.ttf"});
    }
    @font-face {
      font-family: "SaolDisplaySemiboldItalic";
      src: url(${"/assets/SaolDisplay-SemiboldItalic.1b8d3a48.ttf"});
    }
    @font-face {
      font-family: "BebasNeueRegular";
      src: url(${"/assets/BebasNeueRegular.db3c06e2.otf"});
    }
    @font-face {
      font-family: "Helvetica";
      src: url(${"/assets/Helvetica.fe8e6c8e.ttf"});
    }
    @font-face {
      font-family: "Qene";
      src: url(${"/assets/Qene-G.0a5a74e7.otf"});
    }
    @font-face {
      font-family: "DisplayNew";
      src: url(${ve});
    }

    @font-face {
      font-family: "Ginger";
      src: url(${"/assets/Ginger.6383ef1f.ttf"});
    }
    @font-face {
      font-family: "Poppins";
      src: url(${"/assets/Poppins.78f12727.ttf"});
    }
    @font-face {
      font-family: "Heading";
      src: url(${"/assets/Heading.9d17bf1b.ttf"});
    }


    /* GLOBAL STYLES */

    * {
      box-sizing: border-box;
      cursor: none;
    }

    html::-webkit-scrollbar {
      display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    html {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }
    
    body {
      background: ${({ theme: e }) => e.colors.background};
      overflow-x : hidden;
      transition: color 0.3s;
    }


    ${Ee}
`;
const be = [
    { name: "saphir", color: "#6796FF" },
    { name: "Ruby", color: "#FF4D4D" },
    { name: "amethyst", color: "#7176eb" },
    { name: "gold", color: "#FFCC00" },
    { name: "emerald", color: "#66F070" },
    { name: "quartz", color: "#F582D2" },
    { name: "desert", color: "#A55420" },
  ],
  ke = [
    { name: "blueberry", color: "#7B9FF0" },
    { name: "salmon", color: "#F85858" },
    { name: "lavender", color: "#969AF7" },
    { name: "lemon", color: "#FFCE29" },
    { name: "avocado", color: "#74CC33" },
    { name: "candy", color: "#EFA8EF" },
    { name: "desert", color: "#A55420" },
  ],
  je = {
    colors: {
      background: "#000000",
      placeholder: "#2E2E2E",
      primary1: "#A696DD",
      text: { standard: "#FFFFFF", disabled: "#404040", disabled2: "#242424" },
    },
  },
  Ie = be.map((e) => ({
    name: e.name,
    colors: o(i({}, je.colors), { primary1: e.color }),
  })),
  Me = {
    colors: {
      background: "#EFEEEA",
      placeholder: "#2E2E2E",
      primary1: "#A1A3CC",
      text: {
        standard: "rgb(20, 20, 20)",
        disabled: "#B5B5B5",
        disabled2: "#BCBCBC",
      },
    },
  },
  De = ke.map((e) => ({
    name: e.name,
    colors: o(i({}, Me.colors), { primary1: e.color }),
  }));
const Fe = E.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin-left: -10vw;

  @media (max-width: 769px) {
    margin-left: -40px;
    height: 60vh;
  }
  @media (max-width: 480px) {
    margin-left: -28px;
    height: 40vh;
  }
  img {
    width: 100%;
    height: 110%;
    object-fit: cover;
  }
`,
  Ce = ({ src: e, alt: t }) => {
    const a = p.exports.useRef(),
      [r, s] = p.exports.useState(0),
      { scrollY: n } = w(),
      l = N(n, { damping: 20, mass: 0.21, stiffness: 100 }),
      i = y(
        l,
        [r - 0.5 * window.innerHeight, r + 0.75 * window.innerHeight],
        ["10%", "-10%"]
      );
    return (
      p.exports.useLayoutEffect(() => {
        if (!a.current) return null;
        const e = () => {
          s(a.current.offsetTop);
        };
        return (
          e(),
          window.addEventListener("resize", e),
          () => window.removeEventListener("resize", e)
        );
      }, [a]),
      b.createElement(
        Fe,
        { ref: a, alt: t },
        b.createElement(k.img, { style: { y: i }, src: e })
      )
    );
  },
  ze = E.div`
img{
  width: 100%;
  margin-bottom: 50px;
}
.responsive{
    img{
      border: solid 0.5px ${({ theme: e }) => e.colors.text.disabled2};;
    }
  }
.chart{
  .typography{
    span.text-typo{
      &.one{
        font-family: "SaolDisplayLight";
      }
      &.two{
        font-family: "Lato";
      }
    }
  }
  .colors{
    .color{
      &.one{
        background-color: white;
      }
      &.two{
        background-color: black;
        color: white;
      }
      &.three{
        background-color: #FDC463;
        color: white !important;
      }
    }
  }
}
`;
const Re = E.div`
  video {
    width: 100%;
  }
  img {
    width: 100%;
  }
  .chart {
    .typography {
      span.text-typo {
        &.one {
          font-family: "Montserrat";
        }
        &.two {
          font-family: "Gotham";
        }
      }
    }
    .colors {
      .color {
        &.one {
          background-color: white;
        }
        &.two {
          background-color: black;
          color: white;
        }
      }
    }
  }
`;
const Se = E.div`
img{
  width: 100%;
  margin-bottom: 50px;
}
.chart{
  .typography{
    span.text-typo{
      &.one{
        font-family: "NeueMontrealRegular";
      }
      &.two{
        font-family: "BebasNeueRegular";
      }
    }
  }
  .colors{
    .color{
      &.one{
        background-color: white;
      }
      &.two{
        background-color: #3c39bd;
        color: white;
      }
      &.three{
        background-color: #d45394;
        color: white;
      }
      &.four{
        background-color:#45744c;
        color: white;
      }
    }
  }
}
`;
const Ae = E.div`
img{
  width: 100%;
}
.chart{
  .typography{
    span.text-typo{
      &.one{
        font-family: "SaolDisplayLighe";
      }
      &.two{
        font-family: "NeueMontrealRegular";
      }
    }
  }
  .colors{
    .color{
      &.one{
        background-color: #303030;
        color: white !important;
      }
      &.two{
        background-color: #EDEDED;
      }
      &.three{
        background-color: #C9BEBD;
      }
      &.four{
        background-color: #BAD7E5;
      }
    }
  }
}
`;
const $e = E.div`
img{
  width: 100%;
  margin-bottom: 50px;
}
.chart{
  .typography{
    span.text-typo{
      &.one{
        font-family: "Qene";
      }
      &.two{
        font-family: "NeueMontrealRegular";
      }
    }
  }
  .colors{
    .color{
      &.one{
        background-color: white;
      }
      &.two{
        background-color: #f03939;
        color: white;
      }
      &.three{
        background-color: black;
        color: white;
      }
    }
  }
}
`;
E.div`
svg:nth-child(1){
  .a,.b,.e{fill:${({ theme: e }) =>
    e.colors.text
      .standard};}.b{stroke:#707070;}.c,.i{fill:none;}.d,.g{fill:#3a69e2;}.f{clip-path:url(#a);}.h{clip-path:url(#b);}.i{stroke:#6e6e6e;opacity:0.5;}.j,.k,.l{stroke:none;}.k{fill:#3a69e2;}.l{fill:${({
  theme: e,
}) => e.colors.text.standard};}
  }
svg:nth-child(2){
  .a,.b,.f{fill:${({ theme: e }) =>
    e.colors.text
      .standard};}.b{stroke:#707070;}.c,.j{fill:none;}.d{opacity:0.3;}.e,.h{fill:#3a69e2;}.g{clip-path:url(#a);}.i{clip-path:url(#b);}.j{stroke:#6e6e6e;opacity:0.496;}.k,.l,.m{stroke:none;}.l{fill:#3a69e2;}.m{fill:${({
  theme: e,
}) => e.colors.text.standard};}
}
svg:nth-child(3){
  .a,.b,.e{fill:${({ theme: e }) =>
    e.colors.text
      .standard};}.b{stroke:#707070;}.c{fill:none;}.d,.g{fill:#3a69e2;}.f{clip-path:url(#a);}.h{clip-path:url(#b);}.i,.j,.k{stroke:none;}.j{fill:#3a69e2;}.k{fill:${({
  theme: e,
}) => e.colors.text.standard};}
}
img{
  width: 100%;
  margin-bottom: 50px;
}
.responsive{
    img{
      border: solid 0.5px ${({ theme: e }) => e.colors.text.disabled2};
    }
  }
.chart{
  .typography{
    span.text-typo{
      &.one{
        font-family: "BebasNeueRegular";
      }
      &.two{
        font-family: "Helvetica";
      }
    }
  }
  .colors{
    .color{
      &.one{
        background-color: #1A4ED3;
        color: white;  
      }
      &.two{
        background-color: #8BA6EA;
        color: white;
      }
      &.three{
        background-color: #F9FAFB;
      }
    }
  }
}
`;
function Le() {
  return p.exports.createElement(
    "svg",
    { width: 92.033, height: 147.19, viewBox: "0 0 92.033 147.19" },
    p.exports.createElement("defs", null),
    p.exports.createElement("path", {
      className: "a",
      d: "M-1647,5975l.042,29.174h22.551Z",
      transform: "translate(1648.568 -5886.684)",
    }),
    p.exports.createElement("path", {
      className: "a",
      d: "M-1624.406,6004.287l-.042-29.287H-1647Z",
      transform: "translate(1716.439 -5974.886)",
    }),
    p.exports.createElement("path", {
      className: "a",
      d: "M14.644,0l-.028,45.244H0Z",
      transform: "translate(46.788 14.758) rotate(-90)",
    }),
    p.exports.createElement("path", {
      className: "a",
      d: "M-1647,6004.287l.042-29.287h22.551Z",
      transform: "translate(1716.439 -5886.684)",
    }),
    p.exports.createElement("path", {
      className: "a",
      d: "M-1624.406,5975l-.042,29.287H-1647Z",
      transform: "translate(1648.568 -5975)",
    }),
    p.exports.createElement("path", {
      className: "a",
      d: "M-1647,5835.512l67.923,65.927,22.518-6.73-67.67-66.827Z",
      transform: "translate(1648.568 -5806.224)",
    }),
    p.exports.createElement(
      "text",
      { className: "b", transform: "translate(0 145.19)" },
      p.exports.createElement("tspan", { x: 0, y: 0 }, "SHIBUYA")
    )
  );
}
function Pe() {
  return p.exports.createElement(
    "svg",
    { width: 90.465, height: 150.189, viewBox: "0 0 90.465 150.189" },
    p.exports.createElement(
      "g",
      { transform: "translate(-827.384 -803.244)" },
      p.exports.createElement("path", {
        className: "a",
        d: "M-1647,5975l.042,29.174h22.551Z",
        transform: "translate(2474.384 -5083.439)",
      }),
      p.exports.createElement("path", {
        className: "a",
        d: "M-1624.406,6004.287l-.042-29.287H-1647Z",
        transform: "translate(2542.255 -5171.642)",
      }),
      p.exports.createElement("path", {
        className: "a",
        d: "M14.644,0l-.028,45.244H0Z",
        transform: "translate(872.604 818.002) rotate(-90)",
      }),
      p.exports.createElement("path", {
        className: "a",
        d: "M-1647,6004.287l.042-29.287h22.551Z",
        transform: "translate(2542.255 -5083.439)",
      }),
      p.exports.createElement("path", {
        className: "a",
        d: "M-1624.406,5975l-.042,29.287H-1647Z",
        transform: "translate(2474.384 -5171.756)",
      }),
      p.exports.createElement("path", {
        className: "a",
        d: "M-1647,5835.512l67.923,65.927,22.518-6.73-67.67-66.827Z",
        transform: "translate(2474.384 -5002.98)",
      }),
      p.exports.createElement(
        "text",
        { className: "b", transform: "translate(872.604 948.434)" },
        p.exports.createElement("tspan", { x: -25.2, y: 0 }, "渋谷区")
      ),
      p.exports.createElement(
        "text",
        { className: "c", transform: "translate(872.604 948.434)" },
        p.exports.createElement("tspan", { x: -25.2, y: 0 }, "渋谷区")
      )
    )
  );
}
const Te = E.div`
img{
  width: 100%;
}
img.trio{
  width: 30% !important;
  @media (max-width: 600px){
      width: 50% !important;
    }
}
svg{
  font-size:11px;
  font-family:NeueMontreal-Regular, Neue Montreal;
  letter-spacing:0.713em;
}
.logo-duo{
  display: flex;
  justify-content: center;
  svg:nth-child(1){
    fill: ${({ theme: e }) => e.colors.text.standard};
  }
  svg:nth-child(2){
    fill: ${({ theme: e }) => e.colors.primary1};
  }
  svg{
    margin: 0 60px;
  }
}
.chart{
  .typography{
    span.text-typo{
      &.one{
        font-family: "NeueMontrealRegular";
      }
      &.two{
        font-family: "Gotham";
      }
    }
  }
  .colors{
    .color{
      &.one{
        background-color: white;
      }
      &.two{
        background-color: black;
        color: white;
      }
    }
  }
}
`;
const _e = E.div`
img{
  width: 100%;
  margin-bottom: 50px;
}
.chart{
  .typography{
    span.text-typo{
      &.one{
        font-family: "Lato";
      }
    }
  }
  .colors{
    .color{
      &.one{
        background-color: #978B8A;
        color: white !important;
      }
      &.two{
        background-color: #E7DBDA;
        color: white !important;
      }
      &.three{
        background-color: #282738;
        color: white !important;
      }
      &.four{
        background-color: #625F75;
        color: white !important;
      }
    }
  }
}
`;
E.div`
img{
  width: 100%;
  margin-bottom: 50px;
  &.full-img{
    height: 100vh;
  }
  &.step{
    width: 70%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 900px){
      width: 100%;
    }
  }
}
.chart{
  .typography{
    span.text-typo{
      &.one{
        font-family: "Lato";
      }
    }
  }
  .colors{
    .color{
      &.one{
        background-color: #978B8A;
        color: white !important;
      }
      &.two{
        background-color: #E7DBDA;
        color: white !important;
      }
    }
  }
}
`;
const Be = E.div`
img{
  width: 100%;
  margin-bottom: 50px;
  &.step{
    width: 60%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 900px){
      width: 100%;
    }
  }
}
.chart{
  .typography{
    span.text-typo{
      &.one{
        font-family: "Lato";
      }
    }
  }
  .colors{
    .color{
      &.one{
        background-color: black;
        color: white !important;
      }
      &.two{
        background-color: #FFFFFF;
        color: black !important;
      }
      &.three{
        background-color: #CCD6F8;
        color: white !important;
      }
    }
  }
}
`;
const Ge = E.div`
img{
  width: 100%;
  margin-bottom: 50px;

  &.full-img{
    height: 100vh;
  }
  &.step{
    width: 70%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 900px){
      width: 100%;
    }
  }
}
.chart{
  .typography{
    span.text-typo{
      &.one{
        font-family: "NeueMontrealRegular";
      }
      &.two{
        font-family: "DisplayNew";
      }
    }
  }
  .colors{
    .color{
      &.one{
        background-color: #ffffff;
      }
      &.two{
        background-color: #ff3cd5;
        color: white !important;
      }
      &.three{
        background-color: #872bff;
        color: white !important;
      }
      &.four{
        background-color: #374bff;
        color: white !important;
      }
    }
  }
}
`;
function Oe() {
  return p.exports.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 400,
      height: 400,
      viewBox: "0 0 400 400",
    },
    p.exports.createElement(
      "g",
      { transform: "translate(-184 -2773)" },
      p.exports.createElement("rect", {
        className: "a",
        width: 400,
        height: 400,
        transform: "translate(184 2773)",
      }),
      p.exports.createElement(
        "g",
        { transform: "translate(221.068 2810.365)" },
        p.exports.createElement("line", {
          className: "b",
          y2: 325.932,
          transform: "translate(75.723)",
        }),
        p.exports.createElement("line", {
          className: "b",
          y2: 325.932,
          transform: "translate(106.829)",
        }),
        p.exports.createElement("line", {
          className: "b",
          y2: 325.932,
          transform: "translate(205.555)",
        }),
        p.exports.createElement("line", {
          className: "b",
          y2: 325.932,
          transform: "translate(250.179)",
        }),
        p.exports.createElement("line", {
          className: "b",
          y2: 325.932,
          transform: "translate(325.932 52.35) rotate(90)",
        }),
        p.exports.createElement("line", {
          className: "b",
          y2: 325.932,
          transform: "translate(325.932 111.18) rotate(90)",
        }),
        p.exports.createElement("line", {
          className: "b",
          y2: 325.932,
          transform: "translate(325.932 128.761) rotate(90)",
        }),
        p.exports.createElement("line", {
          className: "b",
          y2: 325.932,
          transform: "translate(325.932 211.259) rotate(90)",
        }),
        p.exports.createElement("line", {
          className: "b",
          y2: 325.932,
          transform: "translate(325.932 228.164) rotate(90)",
        }),
        p.exports.createElement("line", {
          className: "b",
          y2: 325.932,
          transform: "translate(176.478)",
        }),
        p.exports.createElement(
          "g",
          { transform: "translate(75.753 52.35)" },
          p.exports.createElement("path", {
            className: "c",
            d: "M4064.448-2036.092l-100.787,59.256v116.806l100.787,58.694v-38.746l-70.284-37.064v-81.936l70.284-37.437Z",
            transform: "translate(-3963.662 2036.092)",
          }),
          p.exports.createElement("path", {
            className: "c",
            d: "M16035.537,5805.594l44.757,18.04v81.176l-44.757,17.244Z",
            transform: "translate(-15905.867 -5746.249)",
          })
        )
      )
    )
  );
}
function He() {
  return p.exports.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 400,
      height: 400,
      viewBox: "0 0 400 400",
    },
    p.exports.createElement(
      "g",
      { transform: "translate(-184 -2773)" },
      p.exports.createElement("rect", {
        className: "a",
        width: 400,
        height: 400,
        transform: "translate(184 2773)",
      }),
      p.exports.createElement(
        "g",
        { transform: "translate(221.068 2810.365)" },
        p.exports.createElement("line", {
          className: "b",
          y2: 325.932,
          transform: "translate(75.723)",
        }),
        p.exports.createElement("line", {
          className: "b",
          y2: 325.932,
          transform: "translate(106.829)",
        }),
        p.exports.createElement("line", {
          className: "b",
          y2: 325.932,
          transform: "translate(205.555)",
        }),
        p.exports.createElement("line", {
          className: "b",
          y2: 325.932,
          transform: "translate(250.179)",
        }),
        p.exports.createElement("line", {
          className: "b",
          y2: 325.932,
          transform: "translate(325.932 52.35) rotate(90)",
        }),
        p.exports.createElement("line", {
          className: "b",
          y2: 325.932,
          transform: "translate(325.932 111.18) rotate(90)",
        }),
        p.exports.createElement("line", {
          className: "b",
          y2: 325.932,
          transform: "translate(325.932 128.761) rotate(90)",
        }),
        p.exports.createElement("line", {
          className: "b",
          y2: 325.932,
          transform: "translate(325.932 211.259) rotate(90)",
        }),
        p.exports.createElement("line", {
          className: "b",
          y2: 325.932,
          transform: "translate(325.932 228.164) rotate(90)",
        }),
        p.exports.createElement("line", {
          className: "b",
          y2: 325.932,
          transform: "translate(176.478)",
        }),
        p.exports.createElement(
          "g",
          { transform: "translate(75.753 52.35)" },
          p.exports.createElement("path", {
            className: "c",
            d: "M4064.448-2036.092l-100.787,59.256v116.806l100.787,58.694v-38.746l-70.284-37.064v-81.936l70.284-37.437Z",
            transform: "translate(-3963.662 2036.092)",
          }),
          p.exports.createElement("path", {
            className: "c",
            d: "M16035.537,5805.594l44.757,18.04v81.176l-44.757,17.244Z",
            transform: "translate(-15905.867 -5746.249)",
          })
        )
      )
    )
  );
}
function Xe() {
  return p.exports.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 400,
      height: 400,
      viewBox: "0 0 400 400",
    },
    p.exports.createElement(
      "g",
      { transform: "translate(-184 -2773)" },
      p.exports.createElement("rect", {
        className: "a",
        width: 400,
        height: 400,
        transform: "translate(184 2773)",
      }),
      p.exports.createElement(
        "g",
        { transform: "translate(296.821 2862.715)" },
        p.exports.createElement("path", {
          className: "b",
          d: "M4064.448-2036.092l-100.787,59.256v116.806l100.787,58.694v-38.746l-70.284-37.064v-81.936l70.284-37.437Z",
          transform: "translate(-3963.662 2036.092)",
        }),
        p.exports.createElement("path", {
          className: "b",
          d: "M16035.537,5805.594l44.757,18.04v81.176l-44.757,17.244Z",
          transform: "translate(-15905.867 -5746.249)",
        })
      )
    )
  );
}
const Ue = E.div`

svg:nth-child(1){
  .a,.b,.c{fill:none;}.b{stroke:${({ theme: e }) =>
    e.colors.text.disabled2};}.c{stroke:${({ theme: e }) =>
  e.colors.text.standard};stroke-width:0.8px;}
  }
svg:nth-child(2){
  .a,.b{fill:none;}.b{stroke:${({ theme: e }) =>
    e.colors.text.disabled2};}.c{fill:${({ theme: e }) =>
  e.colors.text.standard};}
}
svg:nth-child(3){
  .a{fill:none;}.b{fill:${({ theme: e }) => e.colors.text.standard};}
}

img.duo{
    width:40% !important;
}
img{
  width: 100%;
  margin-bottom: 50px;
  @media (max-width: 600px){
    margin-bottom: 20px;
  }

  &.full-img{
    height: 100vh;
  }
  &.step{
    width: 70%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 900px){
      width: 100%;
    }
  }
}
.chart{
  .typography{
    span.text-typo{
      &.one{
        font-family: "NeueMontrealRegular";
      }
      &.two{
        font-family: "DisplayNew";
      }
    }
  }
  .colors{
    .color{
      &.one{
        background-color: #ffffff;
      }
      &.two{
        background-color: #b9b3fc;
        color: white !important;
      }
    }
  }
}
`;
const Ye = E.div`
img{
  width: 100%;

  &.full-img{
    height: 100vh;
  }
  &.step{
    width: 70%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 900px){
      width: 100%;
    }
  }
}
.chart{
  .typography{
    span.text-typo{
      &.one{
        font-family: "NeueMontrealRegular";
      }
      &.two{
        font-family: "DisplayNew";
      }
    }
  }
  .colors{
    .color{
      &.one{
        background-color: #C0B9D2;
        color: white !important;
      }
      &.two{
        background-color: #EAB8B2;
        color: white !important;
      }
      &.three{
        background-color: #EDEDED;
      }
    }
  }
}
`;
const qe = E.div`
img{
  width: 100%;

  &.full-img{
    height: 100vh;
  }
  &.step{
    width: 70%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 900px){
      width: 100%;
    }
  }
}
.chart{
  .typography{
    span.text-typo{
      &.one{
        font-family: "Heading";
      }
      &.two{
        font-family: "Poppins";
      }
    }
  }
  .colors{
    .color{
      &.one{
        background-color: #C387ED;
        color: white !important;
      }
      &.two{
        background-color: #D6FF7E;
      }
      &.three{
        background-color: #FED7E0;
        color: white !important;
      }
      }
    }
  }
}
`;
let Ve = [
  {
    name: "Chanel",
    path: "chanel",
    title: "Experimental website for Eau tendre de Chanel",
    coverImg: "/assets/chanel.0d1693c5.jpg",
    component: () =>
      b.createElement(
        Ye,
        null,
        b.createElement("h2", { className: "text-h2" }, "Graphic Chart"),
        b.createElement(
          "div",
          { className: "chart" },
          b.createElement(
            "div",
            { className: "art-direction" },
            b.createElement("h4", { className: "text-h4" }, "Art direction"),
            b.createElement(
              "p",
              { className: "text-description" },
              "For this project, I chose sweet, tender and soft colors visually, integrating perfectly with the packaging and the freshness of the perfume. For the typography, a modern and readable sans serif typeface, accompanied by a luxurious and charming typography."
            )
          ),
          b.createElement(
            "div",
            { className: "typography" },
            b.createElement("h4", { className: "text-h4" }, "Typography"),
            b.createElement(
              "span",
              { className: "text-typo one" },
              "Neue Montreal",
              b.createElement("br", null),
              "Aa 123"
            ),
            b.createElement(
              "span",
              { className: "text-typo two" },
              "Gallery Modern",
              b.createElement("br", null),
              "Aa 123"
            )
          ),
          b.createElement(
            "div",
            { className: "colors" },
            b.createElement("h4", { className: "text-h4" }, "Colors"),
            b.createElement("div", { className: "color one" }, "#C0B9D2"),
            b.createElement("div", { className: "color two" }, "#EAB8B2"),
            b.createElement("div", { className: "color three" }, "#EDEDED")
          )
        ),
        b.createElement("div", { className: "spacer" }),
        b.createElement("h2", { className: "text-h2" }, "Moodboard"),
        b.createElement("div", { className: "demi-spacer" }),
        b.createElement("img", {
          src: "/assets/moodboard.a91df459.png",
          alt: "moodboard",
        }),
        b.createElement("div", { className: "big-spacer" }),
        b.createElement(Ce, {
          src: "/assets/preview.6d18359e.jpeg",
          alt: "card",
        }),
        b.createElement("div", { className: "spacer" }),
        b.createElement("h2", { className: "text-h2" }, "An immersive place"),
        b.createElement(
          "p",
          { className: "text-description" },
          "I wanted a feminine universe, soft, modern and pleasant, the integration of 3D and texture allow a soft and tender visual which allows to add depth. The objective was to create a room, with the possibility of focusing 3 areas, each of which presents the product and highlight its full range. "
        ),
        b.createElement("div", { className: "spacer" }),
        b.createElement("h2", { className: "text-h2" }, "The rooms"),
        b.createElement("div", { className: "demi-spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "3 spaces"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("img", {
          src: "/assets/room.f06f3fe4.png",
          alt: "room",
        }),
        b.createElement("div", { className: "spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "Homepage"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("div", {
          dangerouslySetInnerHTML: {
            __html:
              '\n         <video loop muted autoplay playsinline>\n          <source src="/assets/homepage.5f285982.mp4" type="video/mp4">\n         </video>',
          },
        }),
        b.createElement("div", { className: "spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "Product page"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("div", {
          dangerouslySetInnerHTML: {
            __html:
              '\n         <video loop muted autoplay playsinline>\n         <source src="/assets/perfume.c051e73f.mp4" type="video/mp4">\n        </video>',
          },
        }),
        b.createElement("div", { className: "spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "Girl talk"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("img", {
          src: "/assets/girlTalk.94b3306d.jpg",
          alt: "girlTalk",
        }),
        b.createElement("div", { className: "spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "Get dressed"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("img", {
          src: "/assets/girlKit.80d3e259.jpg",
          alt: "girlKit",
        }),
        b.createElement("div", { className: "spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "Get dressed"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("img", {
          src: "/assets/getDressed.ee0cf845.jpg",
          alt: "getDressed",
        }),
        b.createElement("div", { className: "big-spacer" }),
        b.createElement(Ce, {
          src: "/assets/product.7ac39795.jpg",
          alt: "card",
        }),
        b.createElement("div", { className: "spacer" }),
        b.createElement("h2", { className: "text-h2" }, "Credits"),
        b.createElement(
          "p",
          { className: "text-description" },
          "Thanks to ",
          b.createElement(
            "a",
            {
              href: "https://www.instagram.com/markdearman ",
              target: "_blank",
            },
            "Markdearman"
          ),
          " for the hand animation, and to ",
          b.createElement(
            "a",
            {
              href: "https://www.behance.net/cristina_laporta",
              target: "_blank",
            },
            "Cristina"
          ),
          " for the 3D decoration :D"
        ),
        b.createElement("div", { className: "big-spacer" })
      ),
    date: "Feb. 2022",
    role: "Designer",
    techs: ["Adobe XD, Photoshop, Illustrator"],
    description:
      "L'Eau tendre de Chanel is the sweetest fragrance to bring out your femininity. Being one of my favorite perfumes, I decided to create an immersive site around it to highlight its qualities, its freshness, its sweetness as well as its accompanying range. L'eau tendre is a captivating perfume made of jasmine and rose essence. It is the feminine fragrance par excellence!",
    visual1: "/assets/visual1.51645a73.jpg",
  },
  {
    name: "Project X",
    path: "project-x-paris",
    title: "Complete redesign of the Project X Paris website",
    coverImg: "/assets/pxp.bd174285.jpg",
    component: () =>
      b.createElement(
        Re,
        null,
        b.createElement("h2", { className: "text-h2" }, "Graphic Chart"),
        b.createElement(
          "div",
          { className: "chart" },
          b.createElement(
            "div",
            { className: "art-direction" },
            b.createElement("h4", { className: "text-h4" }, "Art direction"),
            b.createElement(
              "p",
              { className: "text-description" },
              "We started with monochrome colors to harmonize and highlight the collections of Project X Paris. The colors of the collections being very colorful, stand out well against black and white. For the typography, linear and sans serif fonts make Project X Paris a minimalist and high-end brand."
            )
          ),
          b.createElement(
            "div",
            { className: "typography" },
            b.createElement("h4", { className: "text-h4" }, "Typography"),
            b.createElement(
              "span",
              { className: "text-typo one" },
              "Montserrat",
              b.createElement("br", null),
              "Aa 123"
            ),
            b.createElement(
              "span",
              { className: "text-typo two" },
              "Gotham",
              b.createElement("br", null),
              "Aa 123"
            )
          ),
          b.createElement(
            "div",
            { className: "colors" },
            b.createElement("h4", { className: "text-h4" }, "Colors"),
            b.createElement("div", { className: "color one" }, "#FFFFFF"),
            b.createElement("div", { className: "color two" }, "#000000")
          )
        ),
        b.createElement("div", { className: "spacer" }),
        b.createElement(Ce, {
          src: "/assets/pxp_desktop.baa62c62.jpg",
          alt: "pxp-desktop",
        }),
        b.createElement("div", { className: "spacer" }),
        b.createElement("h2", { className: "text-h2" }, "Desktop UI"),
        b.createElement(
          "p",
          { className: "text-description" },
          "Desktop mock-ups of the Project X Paris website: simple and harmonious pages and easy access to the collections."
        ),
        b.createElement("div", { className: "spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "homepage"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("img", {
          src: "/assets/homepage.b1c9f84d.jpg",
          alt: "pxp",
        }),
        b.createElement("div", { className: "spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "product page"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("img", {
          src: "/assets/product_page.356743ee.jpg",
          alt: "pxp",
        }),
        b.createElement("div", { className: "big-spacer" }),
        b.createElement("h2", { className: "text-h2" }, "Responsive UI"),
        b.createElement(
          "p",
          { className: "text-description" },
          "Responsive site with its bottom menu for easy access to the main pages."
        ),
        b.createElement("div", { className: "demi-spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "responsive selection"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement(
          "div",
          { className: "responsive" },
          b.createElement("img", {
            src: "/assets/homepage_mobile.5b7308f2.png",
            alt: "responsive",
          }),
          b.createElement("img", {
            src: "/assets/menu_mobile.bd9f9c01.png",
            alt: "responsive",
          }),
          b.createElement("img", {
            src: "/assets/product_mobile.4d4c4f59.png",
            alt: "responsive",
          }),
          b.createElement("img", {
            src: "/assets/blog_mobile.fb531ce4.png",
            alt: "responsive",
          })
        ),
        b.createElement("div", { className: "big-spacer" })
      ),
    date: "Jul. 2021",
    role: "Designer, Web integrator",
    techs: ["Adobe XD, Wordpress, Elementor"],
    description:
      "Streetwear specialist born in 2015, Project X Paris offers an avant-garde concept where hip hop, sports, streetwear, lifestyle and art meet. My mission in this project was to make a cast of their official website to facilitate the purchases to the customers, and to have a more ergonomic interface as well as a graphic charter which corresponds to the brand.",
    visual1: "/assets/visual1.121f7f73.jpg",
    websiteLink: "https://www.projectxparis.com/",
  },
  {
    name: "Grissini",
    path: "grissini",
    title: "Design and developtment of the Grissini website",
    coverImg: "/assets/grissini.30e944c9.jpg",
    visual1: "/assets/visual1.caa029a0.jpg",
    component: () =>
      b.createElement(
        ze,
        null,
        b.createElement("h2", { className: "text-h2" }, "Graphic Chart"),
        b.createElement(
          "div",
          { className: "chart" },
          b.createElement(
            "div",
            { className: "art-direction" },
            b.createElement("h4", { className: "text-h4" }, "Art direction"),
            b.createElement(
              "p",
              { className: "text-description" },
              "I decided on a minimalist and pure design, reminding at the same time the classical music while remaining elegant. The Saol Display typography was the perfect answer. For the main color we decided on gold, a luxurious and harmonious color."
            )
          ),
          b.createElement(
            "div",
            { className: "typography" },
            b.createElement("h4", { className: "text-h4" }, "Typography"),
            b.createElement(
              "span",
              { className: "text-typo one" },
              "Saol Display",
              b.createElement("br", null),
              "Aa 123"
            ),
            b.createElement(
              "span",
              { className: "text-typo two" },
              "Lato",
              b.createElement("br", null),
              "Aa 123"
            )
          ),
          b.createElement(
            "div",
            { className: "colors" },
            b.createElement("h4", { className: "text-h4" }, "Colors"),
            b.createElement("div", { className: "color one" }, "#FFFFFF"),
            b.createElement("div", { className: "color two" }, "#000000"),
            b.createElement("div", { className: "color three" }, "#FDC463")
          )
        ),
        b.createElement("div", { className: "spacer" }),
        b.createElement(Ce, {
          src: "/assets/moodboard.f678a96f.jpg",
          alt: "preview",
        }),
        b.createElement("div", { className: "spacer" }),
        b.createElement("h2", { className: "text-h2" }, "Desktop UI"),
        b.createElement(
          "p",
          { className: "text-description" },
          "Desktop mockups for the Grissini Project website; a few previews, simple and clean design, with a background of a video of Grissini in low opacity to highlight the content."
        ),
        b.createElement("div", { className: "spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "homepage"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("img", {
          src: "/assets/homepage.d717cf58.jpg",
          alt: "pxp",
        }),
        b.createElement("div", { className: "spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "contact page"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("img", {
          src: "/assets/contact.6d7e17ab.jpg",
          alt: "pxp",
        }),
        b.createElement("div", { className: "spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "about page"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("img", {
          src: "/assets/about.76b3047d.jpg",
          alt: "pxp",
        }),
        b.createElement("div", { className: "big-spacer" }),
        b.createElement("h2", { className: "text-h2" }, "Responsive UI"),
        b.createElement(
          "p",
          { className: "text-description" },
          "Responsive mock-ups keeping the site simple and easy to navigate."
        ),
        b.createElement("div", { className: "demi-spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "responsive selection"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement(
          "div",
          { className: "responsive" },
          b.createElement("img", {
            src: "/assets/home_mobile.16ec2ea3.jpg",
            alt: "responsive",
          }),
          b.createElement("img", {
            src: "/assets/menu_mobile.07c5e6bf.jpg",
            alt: "responsive",
          }),
          b.createElement("img", {
            src: "/assets/shop_mobile.93697425.jpg",
            alt: "responsive",
          }),
          b.createElement("img", {
            src: "/assets/contact_mobile.66d87cb3.jpg",
            alt: "responsive",
          })
        ),
        b.createElement("div", { className: "big-spacer" })
      ),
    date: "Feb. 2021",
    role: "Designer, Developer",
    techs: ["HTML/CSS/JS"],
    description:
      "Grissini Project is 4 musicians specialized in music for video games, anime and movies. Grissini decided to contact me to design and develop their website. With a strong interest in video games and piano, Grissini Project was the perfect client to use my skills!",
    websiteLink: "https://grissiniproject.com/",
  },
  {
    name: "Arcane",
    path: "arcane",
    title: "UI design for Arcane",
    coverImg: "/assets/arcane.435980b1.jpg",
    visual1: "/assets/visual1.90c94823.jpg",
    component: () =>
      b.createElement(
        Se,
        null,
        b.createElement("h2", { className: "text-h2" }, "Graphic Chart"),
        b.createElement(
          "div",
          { className: "chart" },
          b.createElement(
            "div",
            { className: "art-direction" },
            b.createElement("h4", { className: "text-h4" }, "Art direction"),
            b.createElement(
              "p",
              { className: "text-description" },
              'I used the "KDA" typography from League of legends for the titles, and Neue Montreal for the body text. Simple and warm colors reminding the series.'
            )
          ),
          b.createElement(
            "div",
            { className: "typography" },
            b.createElement("h4", { className: "text-h4" }, "Typography"),
            b.createElement(
              "span",
              { className: "text-typo one" },
              "Neue Montreal",
              b.createElement("br", null),
              "Aa 123"
            ),
            b.createElement(
              "span",
              { className: "text-typo two" },
              "Bebas Neue Regular",
              b.createElement("br", null),
              "Aa 123"
            )
          ),
          b.createElement(
            "div",
            { className: "colors" },
            b.createElement("h4", { className: "text-h4" }, "Colors"),
            b.createElement("div", { className: "color one" }, "#FFFFFF"),
            b.createElement("div", { className: "color two" }, "#3d3bca"),
            b.createElement("div", { className: "color three" }, "#9b4670"),
            b.createElement("div", { className: "color four" }, "#37683e")
          )
        ),
        b.createElement("div", { className: "spacer" }),
        b.createElement("h2", { className: "text-h2" }, "Arcane UI Design"),
        b.createElement("div", { className: "demi-spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "Discover Jinx"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("img", {
          src: "/assets/jinx.237a70cb.jpg",
          alt: "arcane",
        }),
        b.createElement("img", {
          src: "/assets/jinx2.8902b67f.jpg",
          alt: "arcane",
        }),
        b.createElement("div", { className: "spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "Discover Silco"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("img", {
          src: "/assets/silco.67d38f8a.jpg",
          alt: "arcane",
        }),
        b.createElement("img", {
          src: "/assets/silco2.2ce14293.jpg",
          alt: "arcane",
        }),
        b.createElement("div", { className: "spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "Discover Sisters"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("img", {
          src: "/assets/sisters.d9d506eb.jpg",
          alt: "arcane",
        }),
        b.createElement("img", {
          src: "/assets/vi.7622b628.jpg",
          alt: "arcane",
        }),
        b.createElement("div", { className: "spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "Discover Ekko"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("img", {
          src: "/assets/ekko.6f52641a.jpg",
          alt: "arcane",
        }),
        b.createElement("div", { className: "spacer" })
      ),
    date: "Nov. 2021",
    role: "Designer",
    techs: ["AdobeXD, Photoshop"],
    description:
      "Being an avid League of Legends player, I fell in love with the Arcane series from Riot Games. This made me want to add my creative touch by combining my passions, so I created pages for each main character of the series. I let you admire the result!",
  },
  {
    name: "Branding",
    path: "branding",
    title: "Self branding",
    coverImg: "/assets/branding.e9e4a0c6.jpg",
    visual1: "/assets/visual1.02224c3c.jpg",
    component: () =>
      b.createElement(
        Ue,
        null,
        b.createElement("h2", { className: "text-h2" }, "Graphic Chart"),
        b.createElement(
          "div",
          { className: "chart" },
          b.createElement(
            "div",
            { className: "art-direction" },
            b.createElement("h4", { className: "text-h4" }, "Art direction"),
            b.createElement(
              "p",
              { className: "text-description" },
              "I wanted to create a natural universe and something elegant while remaining minimalist and pure. And of course to keep the homogeneity with my website. "
            )
          ),
          b.createElement(
            "div",
            { className: "typography" },
            b.createElement("h4", { className: "text-h4" }, "Typography"),
            b.createElement(
              "span",
              { className: "text-typo one" },
              "Neue Montreal",
              b.createElement("br", null),
              "Aa 123"
            ),
            b.createElement(
              "span",
              { className: "text-typo two" },
              "Gallery Modern",
              b.createElement("br", null),
              "Aa 123"
            )
          ),
          b.createElement(
            "div",
            { className: "colors" },
            b.createElement("h4", { className: "text-h4" }, "Colors"),
            b.createElement("div", { className: "color one" }, "#FFFFFF"),
            b.createElement("div", { className: "color two" }, "#b9b3fc")
          )
        ),
        b.createElement("div", { className: "spacer" }),
        b.createElement("h2", { className: "text-h2" }, "Logo"),
        b.createElement("div", { className: "demi-spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "logo maker"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement(
          "div",
          { className: "img_container" },
          b.createElement(Oe, null),
          b.createElement(He, null),
          b.createElement(Xe, null)
        ),
        b.createElement("div", { className: "spacer" }),
        b.createElement(Ce, {
          src: "/assets/resume.50470d0e.jpg",
          alt: "resume",
        }),
        b.createElement("div", { className: "demi-spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "resume"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("img", {
          className: "little",
          src: "/assets/resumeVerso.db0e41b4.jpg",
          alt: "resume",
        }),
        b.createElement("div", { className: "big-spacer" }),
        b.createElement(Ce, {
          src: "/assets/businessCard.88e016a9.jpg",
          alt: "card",
        }),
        b.createElement("div", { className: "demi-spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "Business Card"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement(
          "div",
          { className: "img_container" },
          b.createElement("img", {
            className: "duo",
            src: "/assets/cardRecto.dee374f7.jpg",
            alt: "calm",
          }),
          b.createElement("img", {
            className: "duo",
            src: "/assets/cardVerso.1079934e.jpg",
            alt: "casual",
          })
        ),
        b.createElement("div", { className: "spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "personal Stickers"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("img", {
          src: "/assets/stickers.fd514e58.png",
          alt: "stickers",
        }),
        b.createElement("div", { className: "big-spacer" }),
        b.createElement(Ce, {
          src: "/assets/envelop.1baaebc3.jpg",
          alt: "envelop",
        }),
        b.createElement("div", { className: "spacer" }),
        b.createElement("h2", { className: "text-h2" }, "Thanks for watching"),
        b.createElement("div", { className: "demis-spacer" }),
        b.createElement(
          "p",
          { className: "text-description" },
          "Do not hesitate to contact me for any project :3"
        ),
        b.createElement("div", { className: "big-spacer" })
      ),
    date: "Feb. 2022",
    role: "Art direction",
    techs: ["AdobeXD, Photoshop, Illustrator"],
    description:
      "For several months I had a desire to create a graphic charter and a universe around my personality. I finally succeeded! I let you discover me : Cathy Dolle",
  },
  {
    name: "Paco",
    path: "paco",
    title: "Paco digging culture",
    coverImg: "/assets/paco.be2416dd.jpg",
    component: () =>
      b.createElement(
        qe,
        null,
        b.createElement("h2", { className: "text-h2" }, "Graphic Chart"),
        b.createElement(
          "div",
          { className: "chart" },
          b.createElement(
            "div",
            { className: "art-direction" },
            b.createElement("h4", { className: "text-h4" }, "Art direction"),
            b.createElement(
              "p",
              { className: "text-description" },
              "For this project, I selected 3 colors from Paco's basic graphic chart, perfectly integrating with the universe. For the typography, a sans serif font, modern, readable and accessible to read, accompanied by a typography dedicated to the titles."
            )
          ),
          b.createElement(
            "div",
            { className: "typography" },
            b.createElement("h4", { className: "text-h4" }, "Typography"),
            b.createElement(
              "span",
              { className: "text-typo one" },
              "Heading Pro",
              b.createElement("br", null),
              "Aa Bb Cc"
            ),
            b.createElement(
              "span",
              { className: "text-typo two" },
              "Poppins",
              b.createElement("br", null),
              "Aa 123"
            )
          ),
          b.createElement(
            "div",
            { className: "colors" },
            b.createElement("h4", { className: "text-h4" }, "Colors"),
            b.createElement("div", { className: "color one" }, "#C387ED"),
            b.createElement("div", { className: "color two" }, "#D6FF7E"),
            b.createElement("div", { className: "color three" }, "#FED7E0")
          )
        ),
        b.createElement("div", { className: "spacer" }),
        b.createElement("h2", { className: "text-h2" }, "Design System"),
        b.createElement("div", { className: "demi-spacer" }),
        b.createElement("img", {
          src: "/assets/designSystem.6b8c10be.png",
          alt: "designSystem",
        }),
        b.createElement("div", { className: "big-spacer" }),
        b.createElement(Ce, {
          src: "/assets/maquettes.5b2d87c5.jpg",
          alt: "card",
        }),
        b.createElement("div", { className: "spacer" }),
        b.createElement("h2", { className: "text-h2" }, "Cards and decks"),
        b.createElement(
          "p",
          { className: "text-description" },
          'The format we have chosen is: the card. The objective is to create cultural cards in the form of a post and to collect them. With the possibility to save them in "decks", in order to share them with other users. A system of "nuggets" has also been integrated, we have removed the numbers : likes, and followers, something that is under a lot of pressure right now.'
        ),
        b.createElement("div", { className: "spacer" }),
        b.createElement("h2", { className: "text-h2" }, "Prototypes"),
        b.createElement("div", { className: "demi-spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "Explore Paco"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("div", {
          dangerouslySetInnerHTML: {
            __html:
              '\n         <video loop muted autoplay playsinline>\n          <source src="/assets/explore.d7d3a902.mp4" type="video/mp4">\n         </video>',
          },
        }),
        b.createElement("div", { className: "spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "Create a gems"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("div", {
          dangerouslySetInnerHTML: {
            __html:
              '\n         <video loop muted autoplay playsinline>\n          <source src="/assets/create.b5bc7cd8.mp4" type="video/mp4">\n         </video>',
          },
        }),
        b.createElement("div", { className: "spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "Search a card"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("div", {
          dangerouslySetInnerHTML: {
            __html:
              '\n    <video loop muted autoplay playsinline>\n        <source src="/assets/search.a11f59b1.mp4" type="video/mp4">\n    </video>',
          },
        }),
        b.createElement("div", { className: "spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "responsive selection"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement(
          "div",
          { className: "responsive" },
          b.createElement("img", {
            src: "/assets/home.2e0d7eed.png",
            alt: "responsive",
          }),
          b.createElement("img", {
            src: "/assets/profil.170c2ae3.png",
            alt: "responsive",
          }),
          b.createElement("img", {
            src: "/assets/msg.dba339c8.png",
            alt: "responsive",
          }),
          b.createElement("img", {
            src: "/assets/deck.1a6cdc0a.png",
            alt: "responsive",
          })
        ),
        b.createElement("div", { className: "spacer" }),
        b.createElement(Ce, { src: "/assets/paco.fcefd4cf.jpg", alt: "card" }),
        b.createElement("div", { className: "spacer" }),
        b.createElement("h2", { className: "text-h2" }, "Thanks for scrolling"),
        b.createElement(
          "p",
          { className: "text-description" },
          "Project made as ESD Paris. ",
          b.createElement("br", null),
          "Our client website : ",
          b.createElement(
            "a",
            { href: "https://paco.cool", target: "_blank" },
            "Paco"
          )
        ),
        b.createElement("div", { className: "big-spacer" })
      ),
    date: "March. 2022",
    role: "Designer, Project Manager",
    techs: ["Figma, After effect, Protopie"],
    description:
      "The goal was to find an original post format and concept for the Paco app. Paco is for the diggers. It's the place where we share our artistic references and discover the gems of the people who inspire us: artists, friends, creatives, critics, etc.",
    visual1: "/assets/visual1.75772b67.jpg",
  },
  {
    name: "Elijah",
    path: "elijah",
    title: "Design and development of Elijah's portfolio",
    coverImg: "/assets/elijah.953e250f.jpg",
    visual1: "/assets/visual1.603dd35d.jpg",
    component: () =>
      b.createElement(
        $e,
        null,
        b.createElement("h2", { className: "text-h2" }, "Graphic Chart"),
        b.createElement(
          "div",
          { className: "chart" },
          b.createElement(
            "div",
            { className: "art-direction" },
            b.createElement("h4", { className: "text-h4" }, "Art direction"),
            b.createElement(
              "p",
              { className: "text-description" },
              "I wanted to create something elegant and minimalist for Elijah."
            )
          ),
          b.createElement(
            "div",
            { className: "typography" },
            b.createElement("h4", { className: "text-h4" }, "Typography"),
            b.createElement(
              "span",
              { className: "text-typo one" },
              "Qene-G",
              b.createElement("br", null),
              "Aa I II X"
            ),
            b.createElement(
              "span",
              { className: "text-typo two" },
              "Neue Montreal Regular",
              b.createElement("br", null),
              "Aa 123"
            )
          ),
          b.createElement(
            "div",
            { className: "colors" },
            b.createElement("h4", { className: "text-h4" }, "Colors"),
            b.createElement("div", { className: "color one" }, "#FFFFFF"),
            b.createElement("div", { className: "color two" }, "#f03939"),
            b.createElement("div", { className: "color three" }, "#000000")
          )
        ),
        b.createElement("div", { className: "spacer" }),
        b.createElement(Ce, {
          src: "/assets/desktopVisual1.0460a0e6.jpg",
          alt: "preview",
        }),
        b.createElement("div", { className: "spacer" }),
        b.createElement("h2", { className: "text-h2" }, "Desktop UI"),
        b.createElement("div", { className: "demi-spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "homepage"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("img", {
          src: "/assets/homepage.44207004.jpg",
          alt: "elijah",
        }),
        b.createElement("div", { className: "spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "clients page navigation"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("img", {
          src: "/assets/clients.d5030aa4.jpg",
          alt: "elijah",
        }),
        b.createElement("div", { className: "spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "brand shoot"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("img", {
          src: "/assets/brand.0439459e.jpg",
          alt: "elijah",
        }),
        b.createElement("div", { className: "spacer" }),
        b.createElement("h2", { className: "text-h2" }, "Responsive UI"),
        b.createElement("div", { className: "demi-spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "responsive selection"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement(
          "div",
          { className: "responsive" },
          b.createElement("img", {
            src: "/assets/homepageMobile.973dfd89.jpg",
            alt: "responsive",
          }),
          b.createElement("img", {
            src: "/assets/menuMobile.a984769a.jpg",
            alt: "responsive",
          }),
          b.createElement("img", {
            src: "/assets/clientsMobile.9cc74274.jpg",
            alt: "responsive",
          }),
          b.createElement("img", {
            src: "/assets/friendsMobile.af8743b1.jpg",
            alt: "responsive",
          })
        ),
        b.createElement("div", { className: "spacer" })
      ),
    date: "Jan. 2022",
    role: "Designer, Dev",
    techs: ["Adobe XD, HTML, CSS, JS"],
    description: "Elijah is a photograph based in Paris!",
    websiteLink: "https://elijahbeta.netlify.app/index.html",
  },
  {
    name: "Feels",
    path: "feels",
    title: "Create with your feeling",
    coverImg: "/assets/feels.00c098a7.jpg",
    component: () =>
      b.createElement(
        Ge,
        null,
        b.createElement("h2", { className: "text-h2" }, "Graphic Chart"),
        b.createElement(
          "div",
          { className: "chart" },
          b.createElement(
            "div",
            { className: "art-direction" },
            b.createElement("h4", { className: "text-h4" }, "Art direction"),
            b.createElement(
              "p",
              { className: "text-description" },
              "I wanted to create something elegant and modern at the same time. The Gallery Modern typography met those expectations. As for the colors, I had fun with R, G, B to give a rhythmic touch to the creation and modulate according to the mood of the users."
            )
          ),
          b.createElement(
            "div",
            { className: "typography" },
            b.createElement("h4", { className: "text-h4" }, "Typography"),
            b.createElement(
              "span",
              { className: "text-typo one" },
              "Neue Montreal",
              b.createElement("br", null),
              "Aa 123"
            ),
            b.createElement(
              "span",
              { className: "text-typo two" },
              "Gallery Modern",
              b.createElement("br", null),
              "Aa 123"
            )
          ),
          b.createElement(
            "div",
            { className: "colors" },
            b.createElement("h4", { className: "text-h4" }, "Colors"),
            b.createElement("div", { className: "color one" }, "#FFFFFF"),
            b.createElement("div", { className: "color two" }, "#ff3cd5"),
            b.createElement("div", { className: "color three" }, "#872bff"),
            b.createElement("div", { className: "color four" }, "#374bff")
          )
        ),
        b.createElement("div", { className: "spacer" }),
        b.createElement("h2", { className: "text-h2" }, "Moodboard"),
        b.createElement("div", { className: "demi-spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "Dark Moodboard"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("img", {
          src: "/assets/moodboard.0929ab15.png",
          alt: "moodboard",
        }),
        b.createElement("div", { className: "big-spacer" }),
        b.createElement(
          "h2",
          { className: "text-h2" },
          "How do you feel today ?"
        ),
        b.createElement("div", { className: "demi-spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "GENERATES AN EMOTIONAL PALETTE"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement(
          "div",
          { className: "img_container mini" },
          b.createElement("img", {
            src: "/assets/calm.8397065e.svg",
            alt: "calm",
          }),
          b.createElement("img", {
            src: "/assets/casual.766e9269.svg",
            alt: "casual",
          }),
          b.createElement("img", {
            src: "/assets/happy.76485e58.svg",
            alt: "happy",
          })
        ),
        b.createElement("div", { className: "spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "Blue Palette"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement(
          "div",
          { className: "img_container" },
          b.createElement("img", {
            className: "duo",
            src: "/assets/b1.b85a6bd9.png",
            alt: "img",
          }),
          b.createElement("img", {
            className: "duo",
            src: "/assets/b2.0ce8b548.png",
            alt: "img",
          })
        ),
        b.createElement("div", { className: "spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "Red Palette"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement(
          "div",
          { className: "img_container" },
          b.createElement("img", {
            className: "duo",
            src: "/assets/r1.3d57133f.png",
            alt: "img",
          }),
          b.createElement("img", {
            className: "duo",
            src: "/assets/r2.5d79722a.png",
            alt: "img",
          })
        ),
        b.createElement("div", { className: "spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "Flyers"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement(
          "div",
          { className: "img_container" },
          b.createElement("img", {
            className: "duo",
            src: "/assets/concept.ad68b9bf.png",
            alt: "img",
          }),
          b.createElement("img", {
            className: "duo",
            src: "/assets/moods.e302cbf3.png",
            alt: "img",
          })
        ),
        b.createElement("div", { className: "spacer" }),
        b.createElement("div", { className: "headline text-regular" }, "Guide"),
        b.createElement("div", { className: "separator" }),
        b.createElement("img", {
          src: "/assets/guide.59c9a798.jpg",
          alt: "img",
        }),
        b.createElement("div", { className: "demi-spacer" }),
        b.createElement(Ce, {
          src: "/assets/feelsPreview.0b9d2a92.png",
          alt: "card",
        }),
        b.createElement("div", { className: "spacer" }),
        b.createElement("h2", { className: "text-h2" }, "Workshop, result"),
        b.createElement("div", { className: "demi-spacer" }),
        b.createElement("video", {
          poster: "/assets/thumbnail.9e3512c5.jpg",
          controls: !0,
          src: "/assets/video.852491e4.mp4",
        }),
        b.createElement("div", { className: "spacer" }),
        b.createElement("h2", { className: "text-h2" }, "Print"),
        b.createElement("div", { className: "demis-spacer" }),
        b.createElement(
          "p",
          { className: "text-description" },
          "I also generate some pattern with processing to create a print collection"
        ),
        b.createElement("div", { className: "demi-spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "Dark Print"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement(
          "div",
          { className: "img_container" },
          b.createElement("img", {
            className: "duo",
            src: "/assets/bPrint.30833adc.png",
            alt: "print",
          }),
          b.createElement("img", {
            className: "duo",
            src: "/assets/rPrint.728fedf4.png",
            alt: "print",
          })
        ),
        b.createElement("div", { className: "big-spacer" })
      ),
    date: "Feb. 2022",
    role: "Designer, developer",
    techs: ["Processing, Illustrator, Adobe XD"],
    description:
      "A generative installation that takes into consideration the singularity of each individual. Each painting is made unique by the visitor's own experience.",
    visual1: "/assets/feelsVisual1.626de851.jpg",
  },
  {
    name: "Shibuya",
    path: "shibuya",
    coverImg: "/assets/shibuya.1bc2be32.jpg",
    title: "Logo creation for Shibuya",
    visual1: "/assets/visual1.89202974.jpg",
    component: () =>
      b.createElement(
        Te,
        null,
        b.createElement("h2", { className: "text-h2" }, "Graphic Chart"),
        b.createElement(
          "div",
          { className: "chart" },
          b.createElement(
            "div",
            { className: "art-direction" },
            b.createElement("h4", { className: "text-h4" }, "Art direction"),
            b.createElement(
              "p",
              { className: "text-description" },
              "For the logo, I chose to study the letter S and make a reference to the crossing, I opted for a geometric base, modern class and simple, accompanied by a baseline."
            )
          ),
          b.createElement(
            "div",
            { className: "typography" },
            b.createElement("h4", { className: "text-h4" }, "Typography"),
            b.createElement(
              "span",
              { className: "text-typo one" },
              "Neue Montreal",
              b.createElement("br", null),
              "Aa 123"
            )
          ),
          b.createElement(
            "div",
            { className: "colors" },
            b.createElement("h4", { className: "text-h4" }, "Colors"),
            b.createElement("div", { className: "color one" }, "#FFFFFF"),
            b.createElement("div", { className: "color two" }, "#000000")
          )
        ),
        b.createElement("div", { className: "spacer" }),
        b.createElement(Ce, {
          src: "/assets/moodboard.6aee8695.png",
          alt: "preview",
        }),
        b.createElement("div", { className: "big-spacer" }),
        b.createElement("h2", { className: "text-h2" }, "Grid application"),
        b.createElement("div", { className: "demi-spacer" }),
        b.createElement(
          "div",
          { className: "img_container" },
          b.createElement("img", {
            className: "trio",
            src: "/assets/grid1.f1c0e0f2.svg",
            alt: "grid",
          }),
          b.createElement("img", {
            className: "trio",
            src: "/assets/grid2.2ddb89e4.svg",
            alt: "grid",
          }),
          b.createElement("img", {
            className: "trio",
            src: "/assets/grid3.c5ec5f4e.svg",
            alt: "grid",
          }),
          b.createElement("img", {
            className: "trio",
            src: "/assets/grid4.262430c5.svg",
            alt: "grid",
          }),
          b.createElement("img", {
            className: "trio",
            src: "/assets/grid5.6bac03e2.svg",
            alt: "grid",
          }),
          b.createElement("img", {
            className: "trio",
            src: "/assets/grid6.392edcff.svg",
            alt: "grid",
          })
        ),
        b.createElement("div", { className: "big-spacer" }),
        b.createElement("h2", { className: "text-h2" }, "Logo result"),
        b.createElement("div", { className: "demi-spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "Latin Logo"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement(
          "div",
          { className: "logo-duo" },
          b.createElement(Le, null),
          b.createElement(Le, null)
        ),
        b.createElement("div", { className: "spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "Kanji Logo"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement(
          "div",
          { className: "logo-duo" },
          b.createElement(Pe, null),
          b.createElement(Pe, null)
        ),
        b.createElement("div", { className: "big-spacer" }),
        b.createElement("h2", { className: "text-h2" }, "Mockup"),
        b.createElement("div", { className: "demi-spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "Advertising frames"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("img", {
          src: "/assets/pub.028f3a0d.png",
          alt: "logo",
        }),
        b.createElement("div", { className: "big-spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "Advertisements in the neighborhood"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("img", {
          src: "/assets/city.436253e1.png",
          alt: "logo",
        }),
        b.createElement("div", { className: "big-spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "Office stuff"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("img", {
          src: "/assets/office.21b07402.png",
          alt: "logo",
        }),
        b.createElement("div", { className: "big-spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "Print stuff"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("img", {
          src: "/assets/print.3a1243fc.png",
          alt: "logo",
        }),
        b.createElement("div", { className: "big-spacer" })
      ),
    date: "Dec. 2021",
    role: "Designer",
    techs: ["Illustrator, Photoshop"],
    description:
      "Shibuya is known for its crossing, which is used by more than 100,000 people every day. The streets are very square and strict, and the area is very chic, minimalist and modern. My goal was to redesign their logo.",
  },
  {
    name: "Hologramme",
    path: "hologramme",
    title: "UI/UX Homepage for Hologramme",
    visual1: "/assets/visual1.d56dbb15.jpg",
    coverImg: "/assets/hologramme.19c4319d.jpg",
    component: () =>
      b.createElement(
        Ae,
        null,
        b.createElement("h2", { className: "text-h2" }, "Graphic Chart"),
        b.createElement(
          "div",
          { className: "chart" },
          b.createElement(
            "div",
            { className: "art-direction" },
            b.createElement("h4", { className: "text-h4" }, "Art direction"),
            b.createElement(
              "p",
              { className: "text-description" },
              "I went with a clean design and modern typography that represents Hologram well. I decided to go with a seasonal color palette, brown for winter and fall and blue for spring and summer."
            )
          ),
          b.createElement(
            "div",
            { className: "typography" },
            b.createElement("h4", { className: "text-h4" }, "Typography"),
            b.createElement(
              "span",
              { className: "text-typo one" },
              "Saol Display",
              b.createElement("br", null),
              "Aa 123"
            ),
            b.createElement(
              "span",
              { className: "text-typo two" },
              "Neue Montreal",
              b.createElement("br", null),
              "Aa 123"
            )
          ),
          b.createElement(
            "div",
            { className: "colors" },
            b.createElement("h4", { className: "text-h4" }, "Colors"),
            b.createElement("div", { className: "color one" }, "#303030"),
            b.createElement("div", { className: "color two" }, "#EDEDED"),
            b.createElement("div", { className: "color three" }, "#C9BEBD"),
            b.createElement("div", { className: "color four" }, "#BAD7E5")
          )
        ),
        b.createElement("div", { className: "big-spacer" }),
        b.createElement("h2", { className: "text-h2" }, "Moodboard"),
        b.createElement("div", { className: "demi-spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "fall/Winter moodboard"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("img", {
          src: "/assets/moodboard1.cd4d9675.png",
          alt: "moodboard1",
        }),
        b.createElement("div", { className: "spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "spring/summer moodboard"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("img", {
          src: "/assets/moodboard2.ef4207a7.png",
          alt: "moodboard1",
        }),
        b.createElement("div", { className: "big-spacer" }),
        b.createElement(
          "h2",
          { className: "text-h2" },
          "UI Design some preview"
        ),
        b.createElement("div", { className: "demi-spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "homepage fall/winter"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("img", {
          src: "/assets/homepage2.6598e223.png",
          alt: "homepage",
        }),
        b.createElement("div", { className: "spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "homepage spring/summer"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("img", {
          src: "/assets/homepage.8de8b4c3.png",
          alt: "homepage",
        }),
        b.createElement("div", { className: "spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "homepage news"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("img", {
          src: "/assets/homepage3.2da64356.png",
          alt: "homepage3",
        }),
        b.createElement("div", { className: "spacer" })
      ),
    date: "Dec. 2020",
    role: "Designer",
    techs: ["Adobe XD, Photoshop"],
    description:
      "Hologramme is a high end hat distributor. I was asked to redesign their B2C website",
  },
  {
    name: "Desktop",
    path: "desktop",
    title: "Desktop",
    coverImg: "/assets/desktop.eb36b26e.jpg",
    visual1: "/assets/desktopVisual1.197c0988.jpg",
    component: () =>
      b.createElement(
        Be,
        null,
        b.createElement("h2", { className: "text-h2" }, "Graphic Chart"),
        b.createElement(
          "div",
          { className: "chart" },
          b.createElement(
            "div",
            { className: "art-direction" },
            b.createElement("h4", { className: "text-h4" }, "Art direction"),
            b.createElement(
              "p",
              { className: "text-description" },
              'For this project I wanted to go in a "flat design" universe, minimalist and modern at the same time, getting closer to the Apple style for the interface. Dark and light themes are available, there is something for everyone !'
            )
          ),
          b.createElement(
            "div",
            { className: "typography" },
            b.createElement("h4", { className: "text-h4" }, "Typography"),
            b.createElement(
              "span",
              { className: "text-typo one" },
              "Lato",
              b.createElement("br", null),
              "Aa 123"
            )
          ),
          b.createElement(
            "div",
            { className: "colors" },
            b.createElement("h4", { className: "text-h4" }, "Colors"),
            b.createElement("div", { className: "color one" }, "#000000"),
            b.createElement("div", { className: "color two" }, "#FFFFFF"),
            b.createElement("div", { className: "color three" }, "#CCD6F8")
          )
        ),
        b.createElement("div", { className: "spacer" }),
        b.createElement(Ce, {
          src: "/assets/preview.89d4fc44.jpg",
          alt: "pxp-desktop",
        }),
        b.createElement("div", { className: "spacer" }),
        b.createElement("h2", { className: "text-h2" }, "Concept"),
        b.createElement("div", { className: "demi-spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "There is a log in page where you can find every update and all content ;)"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("img", {
          className: "step",
          src: "/assets/step1.23d97dcf.png",
          alt: "step",
        }),
        b.createElement("div", { className: "spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "There is the dock of my virtual desktop, you can find my online work and also my Twitch channel :D"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("img", {
          className: "step",
          src: "/assets/step2.da489b98.svg",
          alt: "step",
        }),
        b.createElement("div", { className: "spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "On the setting, you can change the background and the theme :)"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("img", {
          className: "step",
          src: "/assets/step3.6aa86b0d.svg",
          alt: "step",
        }),
        b.createElement("div", { className: "spacer" })
      ),
    date: "Jul. 2020",
    role: "Designer, Devoper",
    techs: ["VueJS"],
    description:
      "Wanna watch my content on a computer? Lets do it ! I developped this project to learn VueJS. Enjoy !!",
    websiteLink: "https://cathydolle.github.io/#/",
  },
  {
    name: "Bubble Tea",
    path: "bubble-tea",
    title: "Bubble Tea maker",
    coverImg: "/assets/bubble.e651b6b8.jpg",
    visual1: "/assets/bubbleVisual1.5665b00a.png",
    component: () =>
      b.createElement(
        _e,
        null,
        b.createElement("h2", { className: "text-h2" }, "Graphic Chart"),
        b.createElement(
          "div",
          { className: "chart" },
          b.createElement(
            "div",
            { className: "art-direction" },
            b.createElement("h4", { className: "text-h4" }, "Art direction"),
            b.createElement(
              "p",
              { className: "text-description" },
              "I went for a 'flat' and minimalist design to represent the bubble tea and the universe around it. There is something for everyone!"
            )
          ),
          b.createElement(
            "div",
            { className: "typography" },
            b.createElement("h4", { className: "text-h4" }, "Typography"),
            b.createElement(
              "span",
              { className: "text-typo one" },
              "Lato",
              b.createElement("br", null),
              "Aa 123"
            )
          ),
          b.createElement(
            "div",
            { className: "colors" },
            b.createElement("h4", { className: "text-h4" }, "Colors"),
            b.createElement("div", { className: "color one" }, "#978B8A"),
            b.createElement("div", { className: "color two" }, "#E7DBDA"),
            b.createElement("div", { className: "color three" }, "#282738"),
            b.createElement("div", { className: "color four" }, "#625F75")
          )
        ),
        b.createElement("div", { className: "spacer" }),
        b.createElement("h2", { className: "text-h2" }, "Desktop"),
        b.createElement("div", { className: "demi-spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "Dark mode"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("img", {
          src: "/assets/dark.2cd32e2e.svg",
          alt: "bubble",
        }),
        b.createElement("div", { className: "spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "Light mode"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("img", {
          src: "/assets/light.d9112e6c.svg",
          alt: "arcane",
        }),
        b.createElement("div", { className: "spacer" }),
        b.createElement("h2", { className: "text-h2" }, "Maker part"),
        b.createElement("div", { className: "demi-spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "Step 1 : Choose your size"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("img", {
          className: "step",
          src: "/assets/step1.99d1bb66.svg",
          alt: "step",
        }),
        b.createElement("div", { className: "spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "Step 2 : Choose your flavor"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("img", {
          className: "step",
          src: "/assets/step2.270654fd.svg",
          alt: "step",
        }),
        b.createElement("div", { className: "spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "Step 3 : Choose your toping"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("img", {
          className: "step",
          src: "/assets/step3.5031df73.svg",
          alt: "step",
        }),
        b.createElement("div", { className: "spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "Step 4 : Choose your size"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("img", {
          className: "step",
          src: "/assets/step4.64018605.svg",
          alt: "step",
        }),
        b.createElement("div", { className: "spacer" }),
        b.createElement(
          "div",
          { className: "headline text-regular" },
          "Step 5 : Choose your straw"
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement("img", {
          className: "step",
          src: "/assets/step5.b236b841.svg",
          alt: "step",
        }),
        b.createElement("div", { className: "spacer" })
      ),
    date: "Jul. 2020",
    role: "Designer, Developer",
    techs: ["HTML, CSS, JS"],
    description:
      "I had to make a website using transition CSS at school, so I decided to make a Bubble Tea maker, enjoy :D",
    websiteLink: "https://cathydolle.github.io/bubbleTea/",
  },
];
Ve = Ve.map((e, t) => o(i({}, e), { id: j(), index: t }));
var Ze = Ve;
function We() {
  return p.exports.createElement(
    "svg",
    { viewBox: "0 0 47.843 64.391" },
    p.exports.createElement("path", {
      className: "a",
      d: "M3991.306-2036.092l-27.645,16.253v32.039l27.645,16.1v-10.628l-19.278-10.166v-22.474l19.278-10.269Z",
      transform: "translate(-3963.661 2036.092)",
    }),
    p.exports.createElement("path", {
      className: "a",
      d: "M16035.541,5805.6l12.275,4.948v22.266l-12.275,4.729Z",
      transform: "translate(-15999.974 -5789.318)",
    })
  );
}
const Ke = E.div`
  ${Ne};
  position: fixed;
  width: 100vw;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  top: 60px;
  z-index: 100;

  pointer-events: none;
  .logo {
    width: 50px;
    height: 50px;
    pointer-events: auto;
    margin-left: -6px;
    svg {
      width: 100%;
      height: 100%;
      fill: ${({ theme: e }) => e.colors.primary1};
    }
  }
  .menu-toggle {
    width: 40px;
    height: 40px;
    pointer-events: auto;
    color: ${({ theme: e }) => e.colors.text.standard};

    .top,
    .bottom {
      width: 100%;
      height: 2px;
      background: ${({ theme: e }) => e.colors.text.standard};
    }
    .bottom {
      width: 50%;
      margin-top: 8px;
      transition: all ease-in-out 0.3s;
    }

    &.menu-opened {
      .bottom {
        width: 65%;
      }
    }
    &:hover {
      .bottom {
        width: 80%;
      }
    }
  }
`,
  Je = () => {
    const e = fe((e) => e.toggleMenu),
      t = fe((e) => e.isMenuOpen);
    return b.createElement(
      Ke,
      null,
      b.createElement(
        I,
        { to: "/", className: "logo" },
        b.createElement(We, null)
      ),
      b.createElement(
        "button",
        {
          onClick: () => {
            e();
          },
          className: "menu-toggle " + (t ? "menu-opened" : ""),
        },
        b.createElement("div", { className: "top" }),
        b.createElement("div", { className: "bottom" })
      )
    );
  },
  Qe = [0.76, 0, 0.24, 1],
  et = E(k.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 90;
  top: 0;
  left: 0;
  background: ${({ theme: e }) => e.colors.background};
  transition: background-color 0.6s;
  * {
    color: ${({ theme: e }) => e.colors.text.standard};
  }

  ul.links {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    display: flex;
    align-items: center;
    flex-flow: column;
    .wrapper {
      overflow: hidden;
      margin: 25px 0;
      @media (max-width: 900px) {
        margin: 18px 0;
      }
      li {
        line-height: 1;
        text-transform: uppercase;
        font-family: Ginger;
        a {
          display: inline-block;
          position: relative;
          transition: transform ease-in-out 0.3s;
          @media (max-width: 900px) {
            font-size: 60px;
          }

          &:hover {
            transform: translateY(-100%);
          }

          span.post {
            position: absolute;
            left: 0;
            top: 100%;
          }
        }
      }
    }
    .active {
      font-family: Ginger;
      color :  ${({ theme: e }) => e.colors.primary1};
    }
  }
`,
  tt = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.4,
        delay: 0.3,
      },
    },
    hidden: { opacity: 0, transition: { when: "afterChildren" } },
  },
  at = { visible: { y: 0 }, hidden: { y: "100%" } },
  rt = ["home", "works", "random"],
  st = () => {
    const { pathname: e } = M(),
      t = fe((e) => e.isMenuOpen),
      a = fe((e) => e.toggleMenu);
    return b.createElement(
      D,
      null,
      t &&
        b.createElement(
          et,
          {
            initial: { y: "100%" },
            animate: { y: 0 },
            transition: { type: "tween", ease: Qe, duration: 0.6 },
          },
          b.createElement(
            k.ul,
            {
              variants: tt,
              initial: "hidden",
              animate: "visible",
              className: "links",
            },
            rt.map((t, r) =>
              b.createElement(
                k.div,
                { key: r, className: "wrapper" },
                b.createElement(
                  k.li,
                  {
                    className: "text-h1",
                    variants: at,
                    exit: at.hidden,
                    transition: {
                      type: "tween",
                      duration: 0.6,
                      ease: "circOut",
                    },
                  },
                  b.createElement(
                    I,
                    {
                      onClick: a,
                      className:
                        "link " +
                        (e.slice(1) === t || ("" === e.slice(1) && "home" === t)
                          ? "active"
                          : ""),
                      to: `/${"home" === t ? "" : t}`,
                    },
                    b.createElement("span", null, t),
                    b.createElement("span", { className: "post" }, t)
                  )
                )
              )
            )
          )
        )
    );
  },
  nt = E.div`
  position: fixed;
  z-index: 1000;
  opacity: 0;
  pointer-events: none;

  .pointer {
    z-index: 1000;
    pointer-events: none;
    width: 5pt;
    height: 5pt;
    background: ${({ theme: e }) => e.colors.primary1};
    border-radius: 50%;
    position: fixed;
    top: -2.5pt;
    left: -2.5pt;
  }
  .cursor-wrapper {
    z-index: 1000;
    pointer-events: none;
    position: fixed;
    top: -15pt;
    left: -15pt;
    width: 30pt;
    height: 30pt;

    .cursor {
      position: absolute;
      width: 30pt;
      height: 30pt;
      border: 1pt solid ${({ theme: e }) => e.colors.primary1};
      border-radius: 50%;
      color: ${({ theme: e }) => e.colors.primary1};
      font-size: 40px;

      &.hover-circle {
        border: none;
        transform: scale(0.01);
        background: ${({ theme: e }) => e.colors.primary1};
        opacity: 0.3;
      }
    }
  }
`,
  lt = (e) => (e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2);
let it = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const ot = () => {
    let e = p.exports.useRef(null),
      t = p.exports.useRef(null),
      a = p.exports.useRef(null),
      r = p.exports.useRef(null),
      s = p.exports.useRef(null);
    const n = p.exports.useRef({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        w: 40,
        h: 40,
      }),
      l = p.exports.useRef({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        w: 5,
        h: 5,
      }),
      i = F();
    return (
      p.exports.useEffect(() => {
        let o = !1,
          c = 0,
          m = !1,
          p = 0;
        const h = () => {
            (n.current.x = C(n.current.x, it.x, 0.2)),
              (n.current.y = C(n.current.y, it.y, 0.2));
            let e = n.current.x + l.current.w / 2,
              a = n.current.y + l.current.h / 2;
            (l.current.x = C(l.current.x, it.x, 0.8)),
              (l.current.y = C(l.current.y, it.y, 0.8));
            let r = l.current.x + l.current.w / 2,
              i = l.current.y + l.current.h / 2;
            (p = d.utils.clamp(0, 1, m ? p + 0.125 : p - 0.125)),
              o
                ? ((c += 0.125), (c = d.utils.clamp(0, 1, c)))
                : ((c -= 0.275), (c = d.utils.clamp(0, 1, c))),
              t.current &&
                s.current &&
                ((t.current.style.transform = `\n        translate3d(${e}px, ${a}px, 0)\n        scale(${
                  d.utils.mapRange(0, 1, 1, 0.75, lt(c)) + 0.25 * lt(p)
                })\n        `),
                (s.current.style.transform = `\n        translate3d(${r}px, ${i}px, 0)\n        `)),
              (f = requestAnimationFrame(h));
          },
          g = ({ clientX: e, clientY: s, target: n }) => {
            (it = { x: e, y: s }),
              (m = !1),
              t.current &&
                (("BUTTON" === n.nodeName ||
                  "A" === n.nodeName ||
                  n.classList.contains("mf-active") ||
                  ue.current) &&
                  (m = !0),
                n.parentElement &&
                  ("BUTTON" === n.parentElement.nodeName ||
                    "A" === n.parentElement.nodeName ||
                    n.parentElement.classList.contains("mf-active")) &&
                  (m = !0),
                m
                  ? (d.to(a.current, { borderColor: "transparent" }),
                    d.to(r.current, { scale: 1 }))
                  : (d.to(a.current, { borderColor: i.colors.primary1 }),
                    d.to(r.current, { scale: 0.01 })));
          },
          x = () => {
            e.current && (o = !0);
          },
          u = () => {
            e.current && (o = !1);
          };
        let f = requestAnimationFrame(h);
        return (
          window.addEventListener("mousemove", g),
          window.addEventListener("mousedown", x),
          window.addEventListener("mouseup", u),
          window.addEventListener(
            "mousemove",
            () => {
              d.to(e.current, { opacity: 1, duration: 0.6 });
            },
            { once: !0 }
          ),
          () => {
            window.removeEventListener("mousemove", g),
              window.removeEventListener("mousedown", x),
              window.removeEventListener("mouseup", u),
              cancelAnimationFrame(f);
          }
        );
      }, [s, i]),
      b.createElement(
        nt,
        { ref: e },
        b.createElement("div", { ref: s, className: "pointer" }),
        b.createElement(
          "div",
          { ref: t, className: "cursor-wrapper" },
          b.createElement("div", { ref: a, className: "cursor" }),
          b.createElement("div", { ref: r, className: "cursor hover-circle" })
        )
      )
    );
  },
  ct = E.div`
  .img-container {
    position: relative;
    width: 250px;
    height: 160px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .overlay {
      width: 100%;
      height: 100%;
      background: ${({ theme: e }) => e.colors.primary1};
      position: absolute;
    }
    @media (max-width: 769px) {
      width: 160px;
      height: 200px;
    }
  }

  .page {
    position: absolute;
    right: 0;
    margin-top: 4px;
    text-align: right;
    font-size: 11px;
    color: ${({ theme: e }) => e.colors.text.standard};
  }
`,
  mt = Ze.map((e) => e.coverImg),
  dt = (e) => {
    const t = p.exports.useRef(),
      a = p.exports.useRef(),
      [r, s] = p.exports.useState(0),
      n = F(),
      [l, o] = p.exports.useState(!1),
      c = z();
    p.exports.useEffect(() => {
      let e;
      return (
        l &&
          (e = setInterval(() => {
            R.timeline()
              .to(a.current, {
                x: 0,
                duration: 0.3,
                onComplete: () => {
                  s((e) => {
                    let a = e;
                    return (
                      a++,
                      a === mt.length - 1 && (a = 0),
                      (t.current.src = mt[a]),
                      a
                    );
                  });
                },
              })
              .to(a.current, { x: "100%", duration: 0.3 })
              .set(a.current, { x: "-100%" });
          }, 5e3)),
        () => clearInterval(e)
      );
    }, [l]);
    const m = p.exports.useCallback(() => {
      R.timeline().to(a.current, {
        x: "-100%",
        duration: 0.4,
        ease: "Power3.easeInOut",
      });
    }, [n]);
    return b.createElement(
      ct,
      i({}, e),
      b.createElement(
        "div",
        {
          onClick: () => c.push("/works"),
          className: "img-container mf-active",
        },
        b.createElement("div", { ref: a, className: "overlay" }),
        b.createElement("img", {
          onLoad: () => {
            l || (m(), o(!0));
          },
          ref: t,
          src: mt[0],
          alt: "",
        })
      ),
      b.createElement(
        "div",
        { className: "page text-small" },
        "(",
        r + 1 < 10 ? "0" + (r + 1) : r + 1,
        "/",
        mt.length + 1 < 10 ? "0" + (mt.length + 1) : mt.length + 1,
        ")"
      )
    );
  };
function pt() {
  return p.exports.createElement(
    "svg",
    { width: 8.845, height: 30.585, viewBox: "0 0 8.845 30.585" },
    p.exports.createElement(
      "g",
      {
        id: "Groupe_3221",
        "data-name": "Groupe 3221",
        transform: "translate(-1828.616 -972.977)",
      },
      p.exports.createElement("path", {
        id: "Tracé_250",
        "data-name": "Tracé 250",
        d: "M11642.237,972.977v29.773",
        transform: "translate(-9809)",
        fill: "none",
        strokeWidth: 1,
      }),
      p.exports.createElement("path", {
        id: "Tracé_251",
        "data-name": "Tracé 251",
        d: "M11637.989,998.2l4.112,4.6,3.981-4.6",
        transform: "translate(-9809)",
        fill: "none",
        strokeWidth: 1,
      })
    )
  );
}
const ht = E.div`
  .home-section {
    margin: 0 auto;
    width: 80vw;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    .headline {
      text-transform: uppercase;
      color: ${({ theme: e }) => e.colors.text.standard};
      font-family: NeueMontrealRegular;
      font-size: 14px;
    }

    .separator {
      margin-top: 20px;
      margin-bottom: 50px;
      width: 100%;
      height: 2px;
      background-color: ${({ theme: e }) => e.colors.text.standard};
      opacity: 0.2;
    }
  }

  .contact {
    margin-top: 20vh;
    padding-bottom: 10vh;
    .footer-body {
      width: 100%;
      height: 60vh;
      display: flex;
      align-items: center;
      justify-content: center;
      .text-h1 {
        display: flex;
        align-items: baseline;
        flex-flow: row nowrap;
        text-transform: uppercase;
        @media (max-width: 1200px) {
          font-size: 80px;
        }
        @media (max-width: 980px) {
          font-size: 60px;
        }
        @media (max-width: 750px) {
          font-size: 50px;
        }
        @media (max-width: 650px) {
          font-size: 30px;
        }
        .important-word {
          font-family: "Ginger";
          font-size: 110%;
          color: ${({ theme: e }) => e.colors.primary1};
          position: relative;
          overflow: hidden;
          padding: 0 10px;
          text-transform: uppercase;
          .word {
            display: inline-block;
            position: relative;
            transition: transform ease-in-out 0.3s;

            &:hover {
              transform: translateY(-100%);
            }

            span.post {
              position: absolute;
              left: 0;
              top: 100%;
            }
          }
        }
      }
    }
    .small-line {
      margin-top: -20px;
      @media (max-width: 750px) {
        .left {
          display: none;
        }
      }
      * {
        font-family: NeueMontrealRegular;
        color: ${({ theme: e }) => e.colors.text.standard};
      }
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;

      .socials {
        display: flex;
        flex-flow: row wrap;
        li {
          text-transform: uppercase;
          margin-right: 10px;
          font-size: 14px;
          margin: 0 20px;
          a {
            transition: color 0.5s;
          }
          a:hover {
            transition: color 0.5s;
            color: ${({ theme: e }) => e.colors.primary1};
          }
        }
        @media (max-width: 750px) {
          justify-content: center;
          li {
            margin: 5px 6px;
            font-size: 11px;
          }
        }
      }
    }
  }
`,
  gt = { visible: { y: 0 }, hidden: { y: "100%" } },
  xt = () =>
    b.createElement(
      ht,
      null,
      b.createElement(
        "div",
        { className: "home-section contact" },
        b.createElement("div", { className: "headline" }, "contact me"),
        b.createElement("div", { className: "separator" }),
        b.createElement(
          "div",
          { className: "footer-body" },
          b.createElement(
            k.a,
            { href: "mailto:cathy.dolle@live.fr", className: "text-h1" },
            "Drop me an",
            b.createElement(
              k.div,
              {
                className: "text-h1 important-word",
                variants: gt,
                exit: gt.hidden,
                transition: { type: "tween", duration: 0.6, ease: "circOut" },
              },
              b.createElement(
                "span",
                { className: "word" },
                b.createElement("span", null, "email"),
                b.createElement("span", { className: "post" }, "email")
              )
            )
          )
        ),
        b.createElement("div", { className: "separator" }),
        b.createElement(
          "div",
          { className: "small-line" },
          b.createElement("div", { className: "left" }, "@2021"),
          b.createElement(
            "ul",
            { className: "socials" },
            b.createElement(
              "li",
              null,
              b.createElement(
                "a",
                {
                  href: "https://www.linkedin.com/in/cathy-dolle/?originalSubdomain=fr",
                  target: "_blank",
                },
                "linkedin"
              )
            ),
            b.createElement(
              "li",
              null,
              b.createElement(
                "a",
                { href: "https://twitter.com/cathydolle", target: "_blank" },
                "twitter"
              )
            ),
            b.createElement(
              "li",
              null,
              b.createElement(
                "a",
                {
                  href: "https://www.instagram.com/cathydolle/",
                  target: "_blank",
                },
                "instagram"
              )
            ),
            b.createElement(
              "li",
              null,
              b.createElement(
                "a",
                {
                  href: "https://www.behance.net/cathydolle",
                  target: "_blank",
                },
                "behance"
              )
            ),
            b.createElement(
              "li",
              null,
              b.createElement(
                "a",
                {
                  href: "https://discord.com/users/169782332247506944",
                  target: "_blank",
                },
                "discord"
              )
            )
          ),
          b.createElement("div", { className: "right" })
        )
      )
    ),
  ut = E(k.div)`
  position: ${({ isTouch: e }) => (e ? "static" : "fixed")};
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  will-change: transform;

  .page-container {
    width: 100%;
    position: relative;
  }
`,
  ft = E(k.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 10;
  .transition-panel {
    width: 100%;
    height: 100%;
    background: ${({ theme: e }) => e.colors.background};
    position: absolute;
    bottom: 0;
  }
`,
  vt = (e) => {
    var t = e,
      { children: a, hasFooter: r = !0, hasTransitionPanel: s = !1 } = t,
      n = c(t, ["children", "hasFooter", "hasTransitionPanel"]);
    const l = p.exports.useRef(null),
      [o, m] = p.exports.useState(0),
      d = p.exports.useCallback((e) => {
        for (let t of e) m(t.contentRect.height);
      }, []);
    p.exports.useLayoutEffect(() => {
      const e = new S((e) => d(e));
      return l && e.observe(l.current), () => e.disconnect();
    }, [l, d]);
    const h = A("(max-width: 769px)"),
      { scrollY: g } = w(),
      x = y(g, [0, o], [0, -o]),
      u = N(x, { damping: 20, mass: 0.21, stiffness: 100 });
    return (
      p.exports.useEffect(() => {
        window.scrollTo(0, 0), g.set(0);
      }, []),
      b.createElement(
        b.Fragment,
        null,
        b.createElement(
          ut,
          { isTouch: h, ref: l, style: { y: h ? 0 : u } },
          b.createElement(
            k.div,
            i({ className: "page-container" }, n),
            a,
            r && b.createElement(xt, null)
          )
        ),
        s &&
          b.createElement(
            ft,
            null,
            b.createElement(k.div, {
              initial: { y: "100%" },
              transition: { duration: 0.5, ease: "easeOut" },
              exit: { y: 0 },
              className: "transition-panel",
            })
          ),
        !h && b.createElement("div", { style: { height: o } })
      )
    );
  },
  Et = [ "web3.js", "design", "UI/UX", "Solidity"],
  wt = ["three.js", "elrond", "adobexd", "indesign"],
  Nt = E.div`
  .line {
    width: 100vw;
    justify-content: flex-end;
    flex-flow: row nowrap;
    display: inline-flex;
    /* margin-bottom: 20px; */
    .string {
      display: inline-block;
      height: auto;
      padding-left: 2vw;
    }

    span {
      text-transform: uppercase;
      line-height: auto;

      &:not(:last-child) {
        margin-right: 2vw;
      }
    }
  }
  .top-line {
    span {
      font-family: "Ginger";
    }
  }

  .bottom-line {
    margin-top: 20px;
    justify-content: flex-start;

    @media (max-width: 769px) {
      margin-top: 12px;
    }

    @media (max-width: 480px) {
      margin-top: 0px;
    }
  }
`,
  yt = () => {
    const e = p.exports.useRef(null),
      t = p.exports.useRef(null),
      a = p.exports.useRef(null),
      r = p.exports.useRef(null);
    return (
      p.exports.useLayoutEffect(() => {
        const s = e.current.getBoundingClientRect().width;
        d.to(t.current, { x: s, ease: "linear", duration: 22, repeat: -1 });
        const n = a.current.getBoundingClientRect().width;
        d.to(r.current, { x: -n, ease: "linear", duration: 22, repeat: -1 });
      }, []),
      b.createElement(
        Nt,
        null,
        b.createElement(
          "div",
          { ref: t, className: "line top-line" },
          b.createElement(
            "div",
            { ref: e, className: "string" },
            Et.map((e, t) =>
              b.createElement("span", { key: t, className: "text-h1" }, e)
            )
          ),
          b.createElement(
            "div",
            { className: "string" },
            Et.map((e, t) =>
              b.createElement("span", { key: t, className: "text-h1" }, e)
            )
          ),
          b.createElement(
            "div",
            { className: "string" },
            Et.map((e, t) =>
              b.createElement("span", { key: t, className: "text-h1" }, e)
            )
          )
        ),
        b.createElement(
          "div",
          { ref: r, className: "line bottom-line" },
          b.createElement(
            "div",
            { ref: a, className: "string" },
            wt.map((e, t) =>
              b.createElement("span", { key: t, className: "text-h1" }, e)
            )
          ),
          b.createElement(
            "div",
            { className: "string" },
            wt.map((e, t) =>
              b.createElement("span", { key: t, className: "text-h1" }, e)
            )
          ),
          b.createElement(
            "div",
            { className: "string" },
            wt.map((e, t) =>
              b.createElement("span", { key: t, className: "text-h1" }, e)
            )
          )
        )
      )
    );
  },
  bt = E.div`
  width: 100%;

  .content {
    display: flex;
    margin-bottom: 40px;

    .title {
      margin-left: 40px;

      font-family: Ginger;
      text-transform: uppercase;
    }
    @media (max-width: 769px) {
      margin-bottom: 26px;

      .title {
        margin-left: 26px;
      }
    }

    @media (max-width: 480px) {
      margin-bottom: 18px;

      .title {
        margin-left: 18px;
      }
    }
  }

  .hover-images-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    pointer-events: none;
    .hover-images {
      transition: opacity ease-out 0.3s;

      img {
        width: 30vw;
        height: auto;
        object-fit: cover;
      }
    }
  }
`,
  kt = k(I),
  jt = ({ project: e, index: t }) => {
    const a = A("(min-width:769px)"),
      r = p.exports.useRef({ x: 0, y: 0 }),
      s = p.exports.useRef(null),
      [n, l] = p.exports.useState(!1),
      i = p.exports.useRef(null);
    p.exports.useEffect(() => {
      const e = ({ clientX: e, clientY: t }) => {
        (r.current = { x: e, y: t }),
          (s.current.style.transform = `translate3d(${r.current.x}px, ${r.current.y}px, 0)`);
      };
      return (
        a && window.addEventListener("mousemove", e),
        () => {
          window.removeEventListener("mousemove", e);
        }
      );
    }, [a]),
      p.exports.useEffect(
        () => (
          n
            ? (i.current = setInterval(() => {}, 200))
            : clearInterval(i.current),
          () => clearInterval(i.current)
        ),
        [n]
      );
    const { scrollY: o } = w(),
      c = N(o, { damping: 20, mass: 0.21, stiffness: 100 });
    return b.createElement(
      bt,
      null,
      b.createElement(
        k.div,
        {
          whileHover: { x: 15, transition: { ease: "easeOut" } },
          className: "content",
        },
        b.createElement(
          "div",
          { className: "index" },
          "(",
          t + 1 < 10 ? "0" + (t + 1) : t + 1,
          ")"
        ),
        b.createElement(
          kt,
          {
            onMouseOver: () => l(!0),
            onMouseOut: () => l(!1),
            className: "title text-h1",
            to: `/works/${e.path}`,
          },
          e.name
        )
      ),
      b.createElement(
        k.div,
        { style: { y: c }, className: "hover-images-wrapper" },
        b.createElement(
          k.div,
          {
            style: { opacity: n && a ? 1 : 0 },
            ref: s,
            className: "hover-images",
          },
          b.createElement("img", { src: e.coverImg, alt: "" })
        )
      ),
      b.createElement("div", { className: "separator" }, " ")
    );
  },
  It = E.div`
*{
  font-family: NeueMontrealRegular;
}
  width: 100%;
  .project {
    width: 100%;
    .content {
      display: flex;
      margin-bottom: 40px;

      .title {
        margin-left: 40px;

        font-family: Ginger;
        text-transform: uppercase;
      }

      @media (max-width: 769px) {
        margin-bottom: 26px;

        .title {
          margin-left: 26px;
        }
      }

      @media (max-width: 480px) {
        margin-bottom: 18px;

        .title {
          margin-left: 18px;
        }
      }
    }

    .hover-images {
      position: fixed;
      z-index: 10000;
      background: grey;
      top: 0;
      left: 0;
      pointer-events: none;

      transition: opacity ease-out 0.3s;

      img {
        width: 30vw;
        height: auto;
        object-fit: cover;
      }
    }
  }
`,
  Mt = () =>
    b.createElement(
      It,
      null,
      Ze.slice(0, 4).map((e, t) =>
        b.createElement(jt, { key: t, index: t, project: e })
      ),
      b.createElement(
        "div",
        { className: "project" },
        b.createElement(
          k.div,
          {
            whileHover: { x: 15, transition: { ease: "easeOut" } },
            className: "content",
          },
          b.createElement("div", { className: "index" }, "(XX)"),
          b.createElement(
            I,
            { className: "title text-h1", to: "/works" },
            "more projects"
          )
        ),
        b.createElement("div", { className: "separator" }, " ")
      )
    ),
  Dt = E(k.div)`
  span {
    display: inline-flex;
    position: relative;
    overflow: hidden;
    align-items: baseline;
    white-space: nowrap;
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      background: ${({ theme: e }) => e.colors.primary1};
      z-index: 100;
    }
  }
`,
  Ft = (e) => {
    var t = e,
      { children: a, direction: r = "RIGHT" } = t,
      s = c(t, ["children", "direction"]);
    const [n, l] = p.exports.useState(0),
      o = p.exports.useRef(null);
    return (
      p.exports.useLayoutEffect(() => {
        l(o.current.getBoundingClientRect().width);
      }, []),
      b.createElement(
        Dt,
        i({}, s),
        b.createElement(
          "span",
          { ref: o },
          a,
          b.createElement(k.div, {
            initial: { x: 0 },
            style: { width: n },
            animate: {
              x: "LEFT" === r ? "-101%" : "101%",
              transition: { duration: 0.4, ease: "easeOut", delay: 0.3 },
            },
            className: "overlay",
          })
        )
      )
    );
  };
var Ct = "/assets/pokemon.edee0287.gif",
  zt = "/assets/animes.f7fc681f.gif",
  Rt = "/assets/lofi.050d138f.gif",
  St = "/assets/piano.fb6e178d.gif",
  At = "/assets/draw.ecb5151f.gif",
  $t = "/assets/food.c4d05611.gif",
  Lt = "/assets/painting.d4b8aa73.gif",
  Pt = "/assets/3D.659ecdcd.gif",
  Tt = "/assets/twitch.87d5ab83.jpg",
  _t = "/assets/resume.81cc666e.pdf";
const Bt = E.div`
  * {
    color: ${({ theme: e }) => e.colors.text.standard};
  }
  img.twitch-img {
    width: 100%;
  }
  .hero {
    width: 100vw;
    height: 100vh;
    padding-bottom: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    @media (max-width: 700px) {
      justify-content: left;
      ${we};
    }
    .text {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      @media (max-width: 780px) {
        margin-top: -25vh;
      }
      .line {
        text-transform: uppercase;
        width: auto;
        white-space: nowrap;
        font-family: Ginger;
        letter-spacing: 0.03em;
        color: ${({ theme: e }) => e.colors.text.standard};
        font-size: 115px;
        line-height: 0.9;

        &.first_line {
          text-align: start;
        }
        &.second_line {
          padding-left: 240px;
        }
        &.third_line {
          position: relative;
          padding-left: 150px;
          .slider-container {
            position: absolute;
            top: 80px;
            right: 160px;
            &::after {
              position: absolute;
              content: "Web3 & front end developer based in Nairobi.";
              width: 250px;
              top: -60px;
              left: -20px;
              font-family: NeueMontrealRegular;
              font-size: 12px;
              text-transform: uppercase;
              white-space: initial;
              color: ${({ theme: e }) => e.colors.text.standard};
              line-height: 1.4;
              letter-spacing: 0.01em;
            }
          }
        }

        .important_word {
          font-family: "Ginger";
          text-transform: uppercase;
          color: ${({ theme: e }) => e.colors.primary1};
          position: relative;
          margin-left: 10px;
        }
      }
      @media (max-width: 1200px) {
        .line {
          font-size: 80px;
          &.second_line {
            padding-left: 150px;
          }
          &.third_line {
            padding-left: 80px;
            .slider-container {
              right: 20px;
            }
          }
        }
      }
      @media (max-width: 950px) {
        .line {
          font-size: 70px;
          &.second_line {
            padding-left: 100px;
          }
          &.third_line {
            padding-left: 50px;
            .slider-container {
              right: -30px;
              top: 60px;
              &:after {
                top: -50px;
              }
            }
          }
        }
      }
      @media (max-width: 769px) {
        .line {
          font-size: 60px;
          line-height: 1;
          &.second_line {
            padding-left: 0px;
          }
          &.third_line {
            padding-left: 0px;
            .slider-container {
              display: flex;
              justify-content: flex-end;
              width: 100%;
              top: 90px;
              right: 0;
              &::after {
                top: -14px;
                left: 0;
              }
            }
          }
        }
      }

      @media (max-width: 500px) {
        .line {
          font-size: 44px;
          &.third_line {
            .slider-container {
              display: flex;
              justify-content: flex-end;
              width: 100%;
              top: 100px;
              right: 0;
              &::after {
                top: -50px;
                right: 0;
              }
            }
            .important_word{
              margin-left: 5px;
            }
          }
        }
      }

      @media (max-width: 380px) {
        .line {
          font-size: 40px;
          &.third_line {
            .slider-container {
              display: flex;
              justify-content: flex-end;
              width: 100%;
              top: 112px;
              right: 0;
              &::after {
                top: -60px;
                right: 0;
              }
            }
          }
        }
      }
    }

    .discover {
      position: absolute;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      flex-direction: column;
      * {
        color: ${({ theme: e }) => e.colors.text.standard};
      }
      span {
        font-family: NeueMontrealRegular;
        font-size: 0.65rem;
        text-transform: uppercase;
      }
      svg {
        margin-bottom: 2px;
        height: 25px;
        stroke: ${({ theme: e }) => e.colors.text.standard};
      }
    }
  }

  .home-section {
    ${we};
    width: 100vw;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    .headline {
      text-transform: uppercase;
      font-size: 14px;
      font-family : NeueMontrealRegular;
    }
    .passion_container {
      display: flex;
      width: 100%;
      justify-content: center;
      flex-wrap: wrap;
      .passion {
        position: relative;
        width: 20vw;
        margin: 35px;
        @media (max-width: 1080px) {
          width: 30vw;
        }
        .text-content {
          display: flex;
          .text-description {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
        }
        img {
          width: 100%;
          height: auto;
          object-fit: cover;
          opacity: 1;
          transition: opacity 0.5s;
          &.hover{
            position: absolute;
            top: 0;
            left: 0;
            opacity: 1;
            &:hover{
              opacity: 0;
            }
          }
          @media (max-width: 900px) {
            opacity: 1;
            width: 100%;
            object-fit: cover;
            //height: 200px;
          }
        }
        h3.number {
          margin-top: 20px;
          font-size: 60px;
          font-family: "Ginger";
          /* font-family: "NeueMontrealLight"; */
          color: ${({ theme: e }) => e.colors.text.disabled};
          margin-left: -4px;
          margin-right: 20px;
          margin-bottom: 14px;
        }
        .text-h4,
        .text-regular {
          text-align: left;
        }
        .text-h4 {
          margin: 5px 0 2px 0;
        }
        @media (max-width: 900px) {
          width: 100%;
          margin: 35px 0;
        }
      }
    }
    .separator {
      margin-top: 20px;
      margin-bottom: 50px;
      width: 100%;
      height: 2px;
      background-color: ${({ theme: e }) => e.colors.text.standard};
      opacity: 0.2;
      &.text-top {
        margin-bottom: 40px;
      }
      &.text-bot {
        margin-top: 40px;
      }

      @media (max-width: 769px) {
        margin-top: 14px;
        margin-bottom: 30px;
        &.text-top {
          margin-bottom: 20px;
        }
        &.text-bot {
          margin-top: 20px;
        }
      }

      @media (max-width: 480px) {
        margin-top: 10px;
        margin-bottom: 25px;
        &.text-top {
          margin-bottom: 10px;
        }
        &.text-bot {
          margin-top: 10px;
        }
      }
    }
  }

  .full-img-container {
    ${we};
  }

  .what-i-do {
    margin-top: 30vh;
    @media (max-width: 700px) {
      margin-top: 20vh;
    }
    .title {
      text-align: center;
      .saol {
        font-family: Ginger;
        color: ${({ theme: e }) => e.colors.primary1};
      }
    }
  }

  .skills {
    margin-top: 20vh;
  }

  .projects {
    margin-top: 20vh;
  }

  .contact {
    margin-top: 20vh;
  }
`,
  Gt = () => {
    const { scrollY: e } = w(),
      t = y(e, (e) => 1 - e / 300);
    return b.createElement(
      vt,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        hasTransitionPanel: !0,
      },
      b.createElement(
        Bt,
        null,
        b.createElement(
          "div",
          { className: "hero" },
          b.createElement(
            "div",
            { className: "text" },
            b.createElement(
              "div",
              { className: "line first_line" },
              b.createElement(Ft, null, "Welcome to")
            ),
            b.createElement(
              "div",
              { className: "line second_line important_word" },
              b.createElement(Ft, { direction: "LEFT" }, "the portfolio")
            ),
            b.createElement(
              "div",
              { className: "line third_line" },
              b.createElement(
                Ft,
                { direction: "LEFT" },
                "of ",
                b.createElement(
                  "span",
                  { className: "important_word" },
                  "SAHIB"
                )
              ),
              b.createElement(
                "div",
                { className: "slider-container" },
                b.createElement(dt, null)
              )
            )
          ),
          b.createElement(
            k.div,
            {
              initial: { opacity: 1 },
              style: { opacity: t },
              className: "discover",
            },
            b.createElement("span", { className: "discover" }, "discover"),
            b.createElement(pt, null)
          )
        ),
        b.createElement(
          "div",
          { className: "home-section what-i-do" },
          b.createElement("div", { className: "headline" }, "what i do"),
          b.createElement("div", { className: "separator" }),
          b.createElement(
            "div",
            { className: "title text-h2-5" },
            "I am a multidisciplinary ",
            b.createElement("span", { className: "saol" }, "web dev"),
            " based in Nairobi, focusing on web design and web3. Currently in intership at ",
            " ",
            b.createElement("span", { className: "saol" }, "SafeConnectX"),
            " as UI/UX Designer & solidity dev"
          ),
          b.createElement(
            "a",
            { className: "button", href: _t, download: "cathy_resume.pdf" },
            "Download my resume"
          )
        ),
        b.createElement(
          "div",
          { className: "home-section skills" },
          b.createElement("div", { className: "headline" }, "skills"),
          b.createElement("div", { className: "separator text-top" }),
          b.createElement(yt, null),
          b.createElement("div", { className: "separator text-bot" })
        ),
        b.createElement(
          "div",
          { className: "home-section projects" },
          b.createElement("div", { className: "headline" }, "projects"),
          b.createElement("div", { className: "separator" }),
          b.createElement(Mt, null)
        ),
        b.createElement(
          "div",
          { className: "home-section what-i-do" },
          b.createElement("div", { className: "headline" }, "My passions"),
          b.createElement("div", { className: "separator" }),
          b.createElement(
            "div",
            { className: "passion_container" },
            b.createElement(
              "div",
              { className: "passion" },
              b.createElement("img", { src: Ct, alt: "passion" }),
              b.createElement("img", {
                className: "hover",
                src: "/assets/games.71689120.png",
                alt: "passion",
              }),
              b.createElement(
                "div",
                { className: "text-content" },
                b.createElement("h3", { className: "text-h3 number" }, "01"),
                b.createElement(
                  "div",
                  { className: "text-description" },
                  b.createElement(
                    "h4",
                    { className: "text-h4" },
                    "Video games"
                  ),
                  b.createElement(
                    "p",
                    { className: "text-regular" },
                    "Improves my creativity"
                  )
                )
              )
            ),
            b.createElement(
              "div",
              { className: "passion" },
              b.createElement("img", { src: zt, alt: "passion" }),
              b.createElement("img", {
                className: "hover",
                src: "/assets/animes.33163c2c.png",
                alt: "passion",
              }),
              b.createElement(
                "div",
                { className: "text-content" },
                b.createElement("h3", { className: "text-h3 number" }, "02"),
                b.createElement(
                  "div",
                  { className: "text-description" },
                  b.createElement("h4", { className: "text-h4" }, "Animes"),
                  b.createElement(
                    "p",
                    { className: "text-regular" },
                    "Gives me inspiration"
                  )
                )
              )
            ),
            b.createElement(
              "div",
              { className: "passion" },
              b.createElement("img", { src: Rt, alt: "passion" }),
              b.createElement("img", {
                className: "hover",
                src: "/assets/music.93bc1742.png",
                alt: "passion",
              }),
              b.createElement(
                "div",
                { className: "text-content" },
                b.createElement("h3", { className: "text-h3 number" }, "03"),
                b.createElement(
                  "div",
                  { className: "text-description" },
                  b.createElement(
                    "h4",
                    { className: "text-h4" },
                    "Chilly Music"
                  ),
                  b.createElement(
                    "p",
                    { className: "text-regular" },
                    "Helps me stay focused"
                  )
                )
              )
            ),
            b.createElement(
              "div",
              { className: "passion" },
              b.createElement("img", { src: St, alt: "passion" }),
              b.createElement("img", {
                className: "hover",
                src: "/assets/piano.30c8e635.png",
                alt: "passion",
              }),
              b.createElement(
                "div",
                { className: "text-content" },
                b.createElement("h3", { className: "text-h3 number" }, "04"),
                b.createElement(
                  "div",
                  { className: "text-description" },
                  b.createElement("h4", { className: "text-h4" }, "Piano"),
                  b.createElement(
                    "p",
                    { className: "text-regular" },
                    "Relaxes me"
                  )
                )
              )
            ),
            b.createElement(
              "div",
              { className: "passion" },
              b.createElement("img", { src: At, alt: "passion" }),
              b.createElement("img", {
                className: "hover",
                src: "/assets/draw.938e40c4.png",
                alt: "passion",
              }),
              b.createElement(
                "div",
                { className: "text-content" },
                b.createElement("h3", { className: "text-h3 number" }, "05"),
                b.createElement(
                  "div",
                  { className: "text-description" },
                  b.createElement("h4", { className: "text-h4" }, "Drawing"),
                  b.createElement(
                    "p",
                    { className: "text-regular" },
                    "Improves my accuracy"
                  )
                )
              )
            ),
            b.createElement(
              "div",
              { className: "passion" },
              b.createElement("img", { src: $t, alt: "passion" }),
              b.createElement("img", {
                className: "hover",
                src: "/assets/food.9bb1962b.png",
                alt: "passion",
              }),
              b.createElement(
                "div",
                { className: "text-content" },
                b.createElement("h3", { className: "text-h3 number" }, "06"),
                b.createElement(
                  "div",
                  { className: "text-description" },
                  b.createElement("h4", { className: "text-h4" }, "Food"),
                  b.createElement(
                    "p",
                    { className: "text-regular" },
                    "Especially japanese and korean food"
                  )
                )
              )
            ),
            b.createElement(
              "div",
              { className: "passion" },
              b.createElement("img", { src: Lt, alt: "passion" }),
              b.createElement("img", {
                className: "hover",
                src: "/assets/paint.85df7b2a.png",
                alt: "passion",
              }),
              b.createElement(
                "div",
                { className: "text-content" },
                b.createElement("h3", { className: "text-h3 number" }, "07"),
                b.createElement(
                  "div",
                  { className: "text-description" },
                  b.createElement("h4", { className: "text-h4" }, "Painting"),
                  b.createElement(
                    "p",
                    { className: "text-regular" },
                    "I create new things"
                  )
                )
              )
            ),
            b.createElement(
              "div",
              { className: "passion" },
              b.createElement("img", {
                src: "/assets/manual.c16cbbcc.gif",
                alt: "passion",
              }),
              b.createElement("img", {
                className: "hover",
                src: "/assets/craft.2fe8219e.png",
                alt: "passion",
              }),
              b.createElement(
                "div",
                { className: "text-content" },
                b.createElement("h3", { className: "text-h3 number" }, "08"),
                b.createElement(
                  "div",
                  { className: "text-description" },
                  b.createElement(
                    "h4",
                    { className: "text-h4" },
                    "Hand crafting"
                  ),
                  b.createElement(
                    "p",
                    { className: "text-regular" },
                    "I bring my ideas to life"
                  )
                )
              )
            ),
            b.createElement(
              "div",
              { className: "passion" },
              b.createElement("img", { src: Pt, alt: "passion" }),
              b.createElement("img", {
                className: "hover",
                src: "/assets/3D.a7bb46e4.png",
                alt: "passion",
              }),
              b.createElement(
                "div",
                { className: "text-content" },
                b.createElement("h3", { className: "text-h3 number" }, "09"),
                b.createElement(
                  "div",
                  { className: "text-description" },
                  b.createElement("h4", { className: "text-h4" }, "3D"),
                  b.createElement(
                    "p",
                    { className: "text-regular" },
                    "blossoms me"
                  )
                )
              )
            )
          )
        ),
        b.createElement(
          "div",
          { className: "home-section what-i-do" },
          b.createElement("div", { className: "headline" }, "Streaming"),
          b.createElement("div", { className: "separator" }),
          b.createElement(
            "div",
            { className: "title text-h2-5" },
            "I'm also a ",
            b.createElement("span", { className: "saol" }, "Twitch partner"),
            " and I stream my work on my Twitch channel :D"
          ),
          b.createElement(
            "a",
            {
              className: "button",
              href: "https://www.twitch.tv/katy_v4",
              target: "_blank",
            },
            "Twitch.tv/Katy_v4"
          )
        ),
        b.createElement("div", { className: "demi-spacer" }),
        b.createElement(
          "div",
          { className: "full-img-container" },
          b.createElement(Ce, {
            className: "full-img",
            src: Tt,
            alt: "moodboard",
          })
        ),
        b.createElement("div", { className: "spacer" })
      )
    );
  };
function Ot() {
  return p.exports.createElement(
    "svg",
    {
      x: "0px",
      y: "0px",
      viewBox: "0 0 476.213 476.213",
      style: { enableBackground: "new 0 0 476.213 476.213" },
      xmlSpace: "preserve",
    },
    p.exports.createElement("polygon", {
      points:
        "345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5  345.606,368.713 476.213,238.106 ",
    })
  );
}
const Ht = E.div`
  transition: background-color 0.6s;
  * {
    font-family: NeueMontrealRegular;
    color: ${({ theme: e }) => e.colors.text.standard};
  }
  .about-visual{
    width: 100%;
  }
  .hero {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .text {
      position: relative;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      .line {
        /* text-transform: uppercase; */
        /* width: 65vw; */
        white-space: nowrap;
        font-family: NeueMontrealRegular;
        letter-spacing: 0.03em;
        color: ${({ theme: e }) => e.colors.text.standard};
        font-size: 130px;
        line-height: 1;
        .important_word {
          line-height: 1.3;
          font-family: "Ginger";
          text-transform: capitalize;
          color: ${({ theme: e }) => e.colors.primary1};
          position: relative;
        }
        @media (max-width:900px){
          font-size: 80px;
        }
      }
      .text-regular{
        width: 70%;
        text-align: center;
        text-transform: uppercase;
      }
    }

    .discover {
      position: absolute;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      flex-direction: column;
      * {
        color: ${({ theme: e }) => e.colors.text.standard};
      }
      span {
        font-family: NeueMontrealRegular;
        font-size: 0.65rem;
        text-transform: uppercase;
      }
      svg {
        margin-top: 10px;
        height: 25px;
        stroke : ${({ theme: e }) => e.colors.text.standard};
      }
    }
  }

  .home-section {
    margin: 0 auto;
    width: 80vw;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    .headline {
      text-transform: uppercase;
      font-size: 14px;
    }
    .passion_container{
      display: flex;
      width: 100%;
      justify-content: center;
      flex-wrap:wrap;
      .passion{
      width : 20vw;
      margin: 35px;
      @media (max-width:1080px){
        width: 30vw;
      }
      .text-content{
        display: flex;
        .text-description{
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
      img{
        width: 100%;
        height: 12vw;
        object-fit: cover;
        opacity: 0.8;
        transition: opacity 0.5s;
        &:hover{
          opacity: 1;
        }
        @media (max-width:1080px){
        height: 20vw;
        }
        @media (max-width:900px){
          opacity: 1;
          width: 100%;
          object-fit: cover;
          height: 200px;
        }
      }
      h3.number{
        margin-top: 20px;
        font-size: 60px;
        font-family: "SaolDisplayLight"; 
        /* font-family: "NeueMontrealLight"; */
        color: ${({ theme: e }) => e.colors.text.disabled};
        margin-left: -4px;
        margin-right: 20px;
        margin-bottom: 14px;

      }
      .text-h4, .text-regular{
        text-align: left;
      }
      .text-h4{
        margin: 5px 0 2px 0;
      }
      @media (max-width:900px){
        width: 100%;
        margin: 35px 0;
      }
     }
    }

    .separator {
      margin-top: 20px;
      margin-bottom: 50px;
      width: 100%;
      height: 2px;
      background-color: ${({ theme: e }) => e.colors.text.standard};
      opacity: 0.2;
      &.text-top{
        margin-bottom: 40px;
      }
      &.text-bot{
        margin-top: 40px;
      }
      @media (max-width: 769px) {
        margin-top: 14px;
        margin-bottom: 30px;
        &.text-top{
        margin-bottom: 20px;
        }
        &.text-bot{
          margin-top: 20px;
        }
      }

      @media (max-width: 480px) {
        margin-top: 10px;
        margin-bottom: 25px;
        &.text-top{
        margin-bottom: 10px;
        }
        &.text-bot{
          margin-top: 10px;
        }
      }
    }
  }

  .what-i-do {
    margin-top: 30vh;

    .title {
      text-align: center;
      .saol {
        font-family: Ginger;
        color: ${({ theme: e }) => e.colors.primary1};
      }
    }


      img.twitch-img{
        width: 60%;
        opacity: 0.5;
        transition: opacity 0.5s;
        &:hover{
          opacity: 1;
        }
        @media (max-width:900px){
          opacity: 1;
          width: 100%;
          object-fit: cover;
        }
      }
    

    .cta {
      margin-top: 20px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      .text {
        color: ${({ theme: e }) => e.colors.text.standard};
        font-family: NeueMontrealRegular;
        text-transform: uppercase;
      }

      .circle {
        margin-left: 20px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: ${({ theme: e }) => e.colors.text.standard};
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          width: 60%;
          height: 60%;
          fill: ${({ theme: e }) => e.colors.background};
          opacity: 0.6;
        }
      }
    }
  }

  .skills {
    margin-top: 20vh;
  }

  .contact {
    margin-top: 20vh;
  }
`,
  Xt = () => {
    const { scrollY: e } = w(),
      t = y(e, (e) => 1 - e / 300);
    return b.createElement(
      vt,
      { hasTransitionPanel: !0 },
      b.createElement(
        Ht,
        null,
        b.createElement(
          "div",
          { className: "hero" },
          b.createElement(
            "div",
            { className: "text" },
            b.createElement(
              "div",
              { className: "line first_line" },
              b.createElement(Ft, null, "ABOUT")
            ),
            b.createElement(
              "div",
              { className: "line second_line" },
              b.createElement(
                Ft,
                { direction: "LEFT" },
                b.createElement(
                  "span",
                  { className: "important_word" },
                  "ME :)"
                )
              )
            ),
            b.createElement(
              "p",
              { className: "text-regular" },
              "A passionate person who wants to learn new things every day"
            )
          ),
          b.createElement(
            k.div,
            {
              initial: { opacity: 1 },
              style: { opacity: t },
              className: "discover",
            },
            b.createElement("span", null, "discover me"),
            b.createElement(pt, null)
          )
        ),
        b.createElement(
          "div",
          { className: "home-section what-i-do" },
          b.createElement("div", { className: "headline" }, "Currently"),
          b.createElement("div", { className: "separator" }),
          b.createElement(
            "div",
            { className: "title text-h2-5" },
            "I'm Cathy, a french ",
            b.createElement("span", { className: "saol" }, "designer"),
            " based in Paris. I am currently a student in the 1st year of a Master's degree in digital creation at ESD Paris, and working as a UI/UX designer at Project X Paris"
          ),
          b.createElement(
            "a",
            { className: "button", href: _t, download: "cathy_resume.pdf" },
            "Download my resume"
          )
        ),
        b.createElement(
          "div",
          { className: "home-section skills" },
          b.createElement("div", { className: "headline" }, "personality"),
          b.createElement("div", { className: "separator text-top" }),
          b.createElement(yt, null),
          b.createElement("div", { className: "separator text-bot" })
        ),
        b.createElement(
          "div",
          { className: "home-section what-i-do" },
          b.createElement(
            "div",
            { className: "headline" },
            "Learn more every day"
          ),
          b.createElement("div", { className: "separator" }),
          b.createElement(
            "div",
            { className: "title text-h2-5" },
            "I'm want to learn ",
            b.createElement("span", { className: "saol" }, "new things"),
            " every day and improve my skills. I'm passionate about digital and creative things"
          ),
          b.createElement("div", { className: "demi-spacer" })
        ),
        b.createElement("img", {
          className: "about-visual",
          src: "/assets/moodboard.b983f1c0.png",
          alt: "visual",
        }),
        b.createElement(
          "div",
          { className: "home-section what-i-do" },
          b.createElement("div", { className: "headline" }, "My passions"),
          b.createElement("div", { className: "separator" }),
          b.createElement(
            "div",
            { className: "passion_container" },
            b.createElement(
              "div",
              { className: "passion" },
              b.createElement("img", { src: Ct, alt: "passion" }),
              b.createElement(
                "div",
                { className: "text-content" },
                b.createElement("h3", { className: "text-h3 number" }, "01"),
                b.createElement(
                  "div",
                  { className: "text-description" },
                  b.createElement(
                    "h4",
                    { className: "text-h4" },
                    "Video games"
                  ),
                  b.createElement(
                    "p",
                    { className: "text-regular" },
                    "Improve my creativity"
                  )
                )
              )
            ),
            b.createElement(
              "div",
              { className: "passion" },
              b.createElement("img", { src: zt, alt: "passion" }),
              b.createElement(
                "div",
                { className: "text-content" },
                b.createElement("h3", { className: "text-h3 number" }, "02"),
                b.createElement(
                  "div",
                  { className: "text-description" },
                  b.createElement("h4", { className: "text-h4" }, "Animes"),
                  b.createElement(
                    "p",
                    { className: "text-regular" },
                    "Give me inspiration"
                  ),
                  "                "
                )
              )
            ),
            b.createElement(
              "div",
              { className: "passion" },
              b.createElement("img", { src: Rt, alt: "passion" }),
              b.createElement(
                "div",
                { className: "text-content" },
                b.createElement("h3", { className: "text-h3 number" }, "03"),
                b.createElement(
                  "div",
                  { className: "text-description" },
                  b.createElement("h4", { className: "text-h4" }, "Lofi music"),
                  b.createElement(
                    "p",
                    { className: "text-regular" },
                    "Help me to stay focus"
                  )
                )
              )
            ),
            b.createElement(
              "div",
              { className: "passion" },
              b.createElement("img", { src: St, alt: "passion" }),
              b.createElement(
                "div",
                { className: "text-content" },
                b.createElement("h3", { className: "text-h3 number" }, "04"),
                b.createElement(
                  "div",
                  { className: "text-description" },
                  b.createElement("h4", { className: "text-h4" }, "Piano"),
                  b.createElement(
                    "p",
                    { className: "text-regular" },
                    "Relax me"
                  )
                )
              )
            ),
            b.createElement(
              "div",
              { className: "passion" },
              b.createElement("img", { src: At, alt: "passion" }),
              b.createElement(
                "div",
                { className: "text-content" },
                b.createElement("h3", { className: "text-h3 number" }, "05"),
                b.createElement(
                  "div",
                  { className: "text-description" },
                  b.createElement("h4", { className: "text-h4" }, "Drawing"),
                  b.createElement(
                    "p",
                    { className: "text-regular" },
                    "Improve my accuracy"
                  )
                )
              )
            ),
            b.createElement(
              "div",
              { className: "passion" },
              b.createElement("img", { src: $t, alt: "passion" }),
              b.createElement(
                "div",
                { className: "text-content" },
                b.createElement("h3", { className: "text-h3 number" }, "06"),
                b.createElement(
                  "div",
                  { className: "text-description" },
                  b.createElement("h4", { className: "text-h4" }, "Food"),
                  b.createElement(
                    "p",
                    { className: "text-regular" },
                    "Especially japanese and korean food"
                  )
                )
              )
            ),
            b.createElement(
              "div",
              { className: "passion" },
              b.createElement("img", { src: Lt, alt: "passion" }),
              b.createElement(
                "div",
                { className: "text-content" },
                b.createElement("h3", { className: "text-h3 number" }, "07"),
                b.createElement(
                  "div",
                  { className: "text-description" },
                  b.createElement("h4", { className: "text-h4" }, "Painting"),
                  b.createElement(
                    "p",
                    { className: "text-regular" },
                    "Create new things"
                  )
                )
              )
            ),
            b.createElement(
              "div",
              { className: "passion" },
              b.createElement("img", {
                src: "/assets/architecture.27ebaef5.gif",
                alt: "passion",
              }),
              b.createElement(
                "div",
                { className: "text-content" },
                b.createElement("h3", { className: "text-h3 number" }, "08"),
                b.createElement(
                  "div",
                  { className: "text-description" },
                  b.createElement(
                    "h4",
                    { className: "text-h4" },
                    "Architecture"
                  ),
                  b.createElement(
                    "p",
                    { className: "text-regular" },
                    "allow me to be pixel on element"
                  )
                )
              )
            ),
            b.createElement(
              "div",
              { className: "passion" },
              b.createElement("img", { src: Pt, alt: "passion" }),
              b.createElement(
                "div",
                { className: "text-content" },
                b.createElement("h3", { className: "text-h3 number" }, "09"),
                b.createElement(
                  "div",
                  { className: "text-description" },
                  b.createElement("h4", { className: "text-h4" }, "Art"),
                  b.createElement(
                    "p",
                    { className: "text-regular" },
                    "blossoms me"
                  )
                )
              )
            )
          )
        ),
        b.createElement(
          "div",
          { className: "home-section what-i-do" },
          b.createElement("div", { className: "headline" }, "Streaming"),
          b.createElement("div", { className: "separator" }),
          b.createElement(
            "div",
            { className: "title text-h2-5" },
            "I'm also ",
            b.createElement("span", { className: "saol" }, "twitch partner"),
            " and steam my project, and passion on my Twitch channel Katy_v4, come say hi !"
          ),
          b.createElement(
            "a",
            {
              className: "button",
              href: "https://www.twitch.tv/katy_v4",
              target: "_blank",
            },
            "Twitch.tv/Katy_v4"
          ),
          b.createElement("div", { className: "demi-spacer" }),
          b.createElement("img", {
            className: "twitch-img",
            src: Tt,
            alt: "twitch",
          })
        ),
        b.createElement("div", { className: "spacer" })
      )
    );
  },
  Ut =
    "\n  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\n  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\n\n  float snoise(vec3 v){ \n    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n    // First corner\n    vec3 i  = floor(v + dot(v, C.yyy) );\n    vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n    // Other corners\n    vec3 g = step(x0.yzx, x0.xyz);\n    vec3 l = 1.0 - g;\n    vec3 i1 = min( g.xyz, l.zxy );\n    vec3 i2 = max( g.xyz, l.zxy );\n\n    //  x0 = x0 - 0. + 0.0 * C \n    vec3 x1 = x0 - i1 + 1.0 * C.xxx;\n    vec3 x2 = x0 - i2 + 2.0 * C.xxx;\n    vec3 x3 = x0 - 1. + 3.0 * C.xxx;\n\n    // Permutations\n    i = mod(i, 289.0 ); \n    vec4 p = permute( permute( permute( \n                i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n            + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) \n            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n    // Gradients\n    // ( N*N points uniformly over a square, mapped onto an octahedron.)\n    float n_ = 1.0/7.0; // N=7\n    vec3  ns = n_ * D.wyz - D.xzx;\n\n    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)\n\n    vec4 x_ = floor(j * ns.z);\n    vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n    vec4 x = x_ *ns.x + ns.yyyy;\n    vec4 y = y_ *ns.x + ns.yyyy;\n    vec4 h = 1.0 - abs(x) - abs(y);\n\n    vec4 b0 = vec4( x.xy, y.xy );\n    vec4 b1 = vec4( x.zw, y.zw );\n\n    vec4 s0 = floor(b0)*2.0 + 1.0;\n    vec4 s1 = floor(b1)*2.0 + 1.0;\n    vec4 sh = -step(h, vec4(0.0));\n\n    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n    vec3 p0 = vec3(a0.xy,h.x);\n    vec3 p1 = vec3(a0.zw,h.y);\n    vec3 p2 = vec3(a1.xy,h.z);\n    vec3 p3 = vec3(a1.zw,h.w);\n\n    //Normalise gradients\n    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n    p0 *= norm.x;\n    p1 *= norm.y;\n    p2 *= norm.z;\n    p3 *= norm.w;\n\n    // Mix final noise value\n    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n    m = m * m;\n    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),dot(p2,x2), dot(p3,x3) ) );\n  }\n",
  Yt = $(
    {
      time: 0,
      tex: void 0,
      speed: 0,
      rgbShiftStrength: 1,
      hoverValue: 0,
      textureAspect: void 0,
      frameAspect: void 0,
    },
    `\n      uniform float time;\n      uniform float hoverValue;\n      varying vec2 vUv;\n      ${Ut}\n  \n      void main() {\n        vUv = uv;\n  \n        vec3 pos = position;\n        float noiseFreq = 3.5;\n        float noiseAmp = 0.15; \n        vec3 noisePos = vec3(pos.x * noiseFreq + time, pos.y, pos.z);\n        pos.z += 0.1 * hoverValue * snoise(noisePos) * noiseAmp;\n  \n        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);\n  \n      }\n    `,
    `\n      uniform float time;\n      uniform float speed;\n      uniform float rgbShiftStrength;\n      uniform float hoverValue;\n      uniform sampler2D tex;\n      varying vec2 vUv;\n  \n      uniform float textureAspect;\n      uniform float frameAspect;\n  \n  \n  \n      ${Ut}\n  \n  \n      \n      void main() {\n        float scaleX = 1.;\n        float scaleY = 1.;\n        float textureFrameRatio = textureAspect / frameAspect;\n        bool portraitTexture = textureAspect < 1.;\n        bool portraitFrame = frameAspect < 1.;\n        \n        if(portraitFrame)\n          scaleX = 1.f / textureFrameRatio;\n        else\n          scaleY = textureFrameRatio;\n        \n        vec2 textureScale = vec2(scaleX, scaleY);\n        vec2 vTexCoordinate = textureScale * (vUv - 0.5) + 0.5;\n  \n        float r = texture2D(tex, vTexCoordinate).r;\n        float g = texture2D(tex, vTexCoordinate - vec2(speed * rgbShiftStrength * 0.012)).g;\n        float b = texture2D(tex, vTexCoordinate + vec2(speed * rgbShiftStrength * 0.012)).b;\n  \n        vec3 color = mix(vec3(r, g, b), vec3(0.), 0.1 - hoverValue * 0.1);\n        gl_FragColor = vec4(color, 1.);\n      }\n    `
  );
L({ DistortionMaterial: Yt });
const qt = p.exports.createRef(),
  Vt = { mobile: [0.7, 1], tablet: [1.4, 0.9], desktop: [2.24, 1.26] },
  Zt = {
    mobile: { distanceX: 0.06, distanceY: 3 },
    tablet: { distanceX: 0.1, distanceY: 2 },
    desktop: { distanceX: 0.14, distanceY: 1.18 },
  },
  Wt = E(k.div)`
  height: 100vh;
  width: 100vw;
  transition: background-color 0.6s;
  position: relative;

  .canvas-html {
    pointer-events: none;

    z-index: -10;
    transition: opacity 0.2s ease-in-out;

    &.hidden {
      opacity: 0;
    }

    .wrapper {
      display: flex;
      align-items: center;
      flex-flow: column nowrap;
      .name {
        font-family: Ginger;
        text-transform: uppercase;
        white-space: nowrap;
        color: white;
      }

      .cta {
        margin-top: 20px;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        .text {
          color: white;
          font-family: NeueMontrealRegular;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .circle {
          margin-left: 20px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;

          svg {
            width: 60%;
            height: 60%;
            fill: ${({ theme: e }) => e.colors.standard};
            opacity: 0.6;
          }
        }
      }
    }
  }

  .scroll-area {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .scroll-inv {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 60px;
    font-family: "NeueMontrealRegular";
    color: ${({ theme: e }) => e.colors.text.standard};
    z-index: 1000;
    text-transform: uppercase;
  }

  .scroll-progress {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 40px;
    width: 35vw;
    height: 2px;
    background: grey;

    .scroll-bar {
      background: ${({ theme: e }) => e.colors.text.standard};
      height: 100%;
      width: 0;
    }
  }
`;
let Kt = 0,
  Jt = 0;
function Qt(e) {
  const t = p.exports.useRef(),
    a = p.exports.useRef(),
    [r, s] = p.exports.useState(!1),
    n = p.exports.useRef({ value: 0 }),
    l = A("(min-width: 480px) and (max-width: 769px)"),
    c = A("(max-width: 479px)"),
    m = c ? "mobile" : l ? "tablet" : "desktop";
  O((e, t) => {
    a.current.time += t;
    let r = Math.abs(qt.current.scrollTop - Kt);
    (Jt = H(Jt, r, 0.03, t)),
      (a.current.speed = Jt),
      (Kt = qt.current.scrollTop);
  }),
    p.exports.useEffect(() => {
      t.current.position.setFromSphericalCoords(
        20,
        Math.PI / 2,
        Zt[m].distanceX * e.index
      );
      let a = new G().copy(t.current.position);
      (a = a.multiplyScalar(2)),
        t.current.lookAt(a),
        (t.current.position.y += e.index / Zt[m].distanceY);
    }, [l, c]),
    p.exports.useEffect(() => {
      ue.current = r;
      let e = d.to(n.current, {
        value: r ? 1 : 0,
        onUpdate: () => {
          n.current && (a.current.hoverValue = n.current.value);
        },
      });
      return () => {
        e.kill(), (ue.current = !1);
      };
    }, [r]);
  return (
    p.exports.useEffect(() => {
      2 === e.index && console.log(e.isInView);
    }, [e.isInView]),
    b.createElement(
      "mesh",
      o(i({}, e), {
        onClick: () => {
          (qt.current.scrollTop =
            e.index *
            ((qt.current.children[0].offsetHeight - window.innerHeight) /
              (Ze.length - 1))),
            setTimeout(() => {
              e.history.push(`/works/${e.project.path}`);
            }, 300);
        },
        onPointerOver: () => s(!0),
        onPointerOut: () => s(!1),
        ref: t,
      }),
      b.createElement("planeGeometry", { args: [...Vt[m], 32, 32] }),
      b.createElement("distortionMaterial", {
        frameAspect: Vt[m][0] / Vt[m][1],
        textureAspect:
          e.texture.image.naturalWidth / e.texture.image.naturalHeight,
        ref: a,
        tex: e.texture,
        rgbShiftStrength: 0.8,
      }),
      b.createElement(
        X,
        {
          center: !0,
          className: "canvas-html " + (e.isInView ? "" : "hidden"),
          position: [0, 0, 0.25],
        },
        b.createElement(
          k.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            className: "wrapper",
          },
          b.createElement("h1", { className: "text-h1 name" }, e.project.name),
          b.createElement(
            k.div,
            {
              animate: { x: r ? 15 : 0, transition: "tween" },
              className: "cta",
            },
            b.createElement("span", { className: "text" }, "open project"),
            b.createElement(
              "div",
              { className: "circle" },
              b.createElement(Ot, null)
            )
          )
        )
      )
    )
  );
}
let ea = 0;
const ta = ({ history: e }) => {
    const t = B(Ze.map((e) => e.coverImg)),
      a = p.exports.useRef(),
      r = p.exports.useRef(new G()),
      [s, n] = p.exports.useState(0),
      l = A("(min-width: 480px) and (max-width: 769px)"),
      i = A("(max-width: 479px)") ? "mobile" : l ? "tablet" : "desktop";
    return (
      O(({ camera: e }, t) => {
        ea = T(
          0,
          1,
          0,
          Ze.length - 1,
          qt.current.scrollTop /
            (qt.current.children[0].offsetHeight - window.innerHeight)
        );
        let a = Math.round(ea);
        s !== a && n(a);
        const l = r.current.setFromSphericalCoords(
          21.5,
          Math.PI / 2,
          Zt[i].distanceX * ea
        );
        (e.position.x = H(e.position.x, l.x, 0.1, t)),
          (e.position.y = H(e.position.y, l.y, 0.1, t)),
          (e.position.z = H(e.position.z, l.z, 0.1, t)),
          (e.position.y = H(
            e.position.y,
            e.position.y + ea / Zt[i].distanceY,
            0.1,
            t
          )),
          e.lookAt(0, ea / Zt[i].distanceY, 0),
          e.updateProjectionMatrix();
      }),
      b.createElement(
        "group",
        { ref: a },
        Ze.map((a, r) =>
          b.createElement(Qt, {
            isInView: r > s - 3 && r < s + 3,
            index: r,
            key: a.name + r,
            texture: t[r],
            project: Ze[r],
            history: e,
          })
        )
      )
    );
  },
  aa = () => {
    const e = z(),
      t = p.exports.useRef(0),
      a = p.exports.useRef(null),
      [r, s] = p.exports.useState(!1),
      n = p.exports.useRef(null),
      { progress: l } = P();
    p.exports.useLayoutEffect(() => {
      let e = T(0, 100, 0, 35, l) + "vw";
      d.to(n.current, { width: e, duration: 1 });
    }, [l]),
      p.exports.useLayoutEffect(() => {
        qt.current.scrollTop += 1;
      }, []);
    return b.createElement(
      vt,
      { hasFooter: !1, hasTransitionPanel: !0 },
      b.createElement(
        Wt,
        null,
        b.createElement(
          _,
          {
            dpr: [1, 1.5],
            mode: "concurrent",
            camera: { position: [0, 0, 24], far: 3 },
            raycaster: {
              computeOffsets: ({ offsetX: e, offsetY: t }) => ({
                offsetY: t - qt.current.scrollTop,
                offsetX: e,
              }),
            },
            onCreated: (e) => e.events.connect(qt.current),
          },
          b.createElement(
            p.exports.Suspense,
            { fallback: null },
            b.createElement(ta, { history: e })
          )
        ),
        b.createElement(
          "div",
          {
            className: "scroll-area",
            ref: qt,
            onScroll: (e) => {
              (t.current = e.target.scrollTop),
                qt.current.scrollTop > 5 && !r && s(!0),
                a.current &&
                  d.to(a.current, {
                    width:
                      (t.current /
                        (qt.current.children[0].offsetHeight -
                          window.innerHeight)) *
                        100 +
                      "%",
                  });
            },
          },
          b.createElement("div", {
            style: { height: 70 * (Ze.length - 1) + "vh", width: "100vw" },
          })
        ),
        b.createElement(
          k.div,
          {
            transition: { duration: 1.2, delay: 0.3 },
            initial: { opacity: 0 },
            animate: { opacity: r ? 0 : 1 },
            className: "scroll-inv",
          },
          "scroll"
        ),
        b.createElement(
          k.div,
          {
            ref: n,
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            className: "scroll-progress",
          },
          b.createElement("div", { ref: a, className: "scroll-bar" })
        )
      )
    );
  };
let ra = [
  {
    name: "elijah",
    coverImg: "/assets/elijah.4efdda47.jpg",
    type: "print",
    description: "elijah portfolio",
    websiteLink: "",
  },
  {
    name: "Portfolio book",
    coverImg: "/assets/folioBook.36ef074d.jpg",
    type: "mockup",
    description: "My folio inside a book",
  },
  {
    name: "1st Isometric room",
    coverImg: "/assets/room.2ce89f2d.jpg",
    type: "3D",
    description: "My first creation on blender",
  },
  {
    name: "Business Card",
    coverImg: "/assets/flowerCard.7a6fee85.jpg",
    type: "mockup",
    description: "my card inside flowers",
  },
  {
    name: "lila",
    coverImg: "/assets/lila.cbd5ddef.jpg",
    type: "processing",
    description: "An API for designR (work only on desktop)",
  },
  {
    name: "vol",
    coverImg: "/assets/vol.01107986.jpg",
    type: "print",
    description: "vol pattern print",
    websiteLink: "",
  },
  {
    name: "Self Kit",
    coverImg: "/assets/selfKit.2009b6f3.jpg",
    type: "Design",
    description: "My personal branding kit",
  },
  {
    name: "Etude house",
    coverImg: "/assets/etude.b36ea00f.jpg",
    type: "Ui Design",
    description: "UI Design for Étude House",
    websiteLink: "",
  },
  {
    name: "Blob",
    coverImg: "/assets/blob.6ec3e22a.jpg",
    type: "3D",
    description: "Blob three JS",
  },
  {
    name: "picto",
    coverImg: "/assets/picto.8fbb5f68.jpg",
    type: "logo",
    description: "Pictogramme for shibuya",
  },
  {
    name: "weekend",
    coverImg: "/assets/weekend.c2dcc1ee.jpg",
    type: "print",
    description: "Bibi - The weekend view",
    websiteLink: "",
  },
  {
    name: "Feels Blue",
    coverImg: "/assets/feelsBlue.f5791fe6.jpg",
    type: "processing",
    description: "An API for designR (work only on desktop)",
  },
  {
    name: "Envelop logo",
    coverImg: "/assets/logoWater.3fb1d528.jpg",
    type: "Mockup",
    description: "Envelop with my logo",
    websiteLink: "",
  },
  {
    name: "Nike homepage",
    coverImg: "/assets/nike.b4c04abd.jpg",
    type: "website",
    description: "Homepage for Nike",
    websiteLink: "",
  },
  {
    name: "low",
    coverImg: "/assets/low.66dbb25c.jpg",
    type: "print",
    description: "low pattern print",
    websiteLink: "",
  },
  {
    name: "Kill geometry print",
    coverImg: "/assets/kill.372d8716.jpg",
    type: "Print",
    description: "Geometry print used processing",
    websiteLink: "",
  },
  {
    name: "Parallele magazine",
    coverImg: "/assets/parallele.1b742e1c.jpg",
    type: "Print",
    description: "Cover for magazine parallele",
  },
  {
    name: "Feels Cover",
    coverImg: "/assets/feels.47c331ce.jpg",
    type: "Processing",
    description: "Cover for magazine parallele",
  },
  {
    name: "Flamalice portfolio",
    coverImg: "/assets/flamalice.d7bfb289.jpg",
    type: "website",
    description: "I made a portfolio for the illustrator Flamalice",
    websiteLink: "",
  },
  {
    name: "etude house",
    coverImg: "/assets/etude_phone.8ed89246.jpg",
    type: "UI design",
    description: "etude house mobile checkout",
    websiteLink: "",
  },
  {
    name: "Feels Red",
    coverImg: "/assets/feelsRed.40da6ce3.jpg",
    type: "processing",
    description: "An API for designR (work only on desktop)",
  },
  {
    name: "Cl presave",
    coverImg: "/assets/cl.b6c26a76.jpg",
    type: "Ui design",
    description: "Cl Presave page",
    websiteLink: "",
  },
  {
    name: "Kaonashi human",
    coverImg: "/assets/illu1.1a99368f.jpg",
    type: "Illustration",
    description: "remake from suzani",
    websiteLink: "",
  },
  {
    name: "vans",
    coverImg: "/assets/vans.51f759ac.jpg",
    type: "Ui design",
    description: "log in page design for vans",
    websiteLink: "",
  },
  {
    name: "Shibuya Device Mockup",
    coverImg: "/assets/shibuya_device.d252c262.jpg",
    type: "Print",
    description: "A mockup for Ipad Device",
    websiteLink: "download",
  },
  {
    name: "Mandala",
    coverImg: "/assets/mandala.eaac82e9.jpg",
    type: "Illustrator",
    description:
      "I had to create a mandala for school, I choosed Chihiro theme",
    websiteLink: "",
  },
  {
    name: "red book",
    coverImg: "/assets/red.9c8dae27.jpg",
    type: "book",
    description: "One of my favourite book for inspiration",
    websiteLink: "https://red.com/",
  },
  {
    name: "Distorsion Processing",
    coverImg: "/assets/distortion.cd031a26.jpg",
  },
  {
    name: "Princess Mononoke",
    coverImg: "/assets/illu2.1e3b5ce3.jpg",
    type: "Illustration",
    description: "remake from suzani",
    websiteLink: "",
  },
];
ra = ra.map((e) => o(i({}, e), { id: j() }));
var sa = ra;
let na;
function la() {
  const { gl: e, scene: t, camera: a, size: r } = U(),
    s = p.exports.useMemo(() => {
      const r = Y({ THREE: q, Pass: V, FullScreenQuad: Z });
      na = new r({
        distortion: new W(0, 0),
        principalPoint: new W(0, 0),
        focalLength: new W(1, 1),
        skew: 0,
      });
      const s = new K(e);
      return s.addPass(new J(t, a)), s.addPass(na), s;
    }, []);
  return (
    p.exports.useEffect(() => {
      s.setSize(r.width, r.height);
    }, [r]),
    O((e, t) => s.render(t), 1)
  );
}
L({ DistortionMaterial: Yt });
const ia = new G(),
  oa = p.exports.createRef(),
  ca = p.exports.createRef(),
  ma = p.exports.createRef(),
  da = p.exports.createRef(),
  pa = p.exports.createRef();
let ha = p.exports.createRef(0),
  ga = p.exports.createRef();
const xa = E.div`
  height: 100vh;
  width: 100vw;
  transition: background-color 0.6s;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  @media (max-width: 900px){
    justify-content: center;
  }

  .map {
    pointer-events: none;
    position: absolute;
    left: 10vw;
    bottom: -3vh;
    transform: translateY(-50%);
    width: auto;
    height: auto;
    opacity: 0.7;

    @media (max-width: 900px){
      left: auto;
    }

    .item-container {
      width: 0;
      height: 0;
      position: absolute;
      transform: translateX(-50%) translateY(-50%);
      top: 50%;
      left: 50%;
    }

    .item {
      position: absolute;
      transform: translateX(-50%) translateY(-50%);
      border: 1px solid ${({ theme: e }) => e.colors.text.disabled};
      transition: all ease-in-out 0.4s;

      &.is-active {
        border: 1px solid ${({ theme: e }) => e.colors.primary1};
        background: ${({ theme: e }) => e.colors.primary1};
      }
    }

    .position {
      position: absolute;
      transform: translateX(-50%) translateY(-50%);
      border: 1px solid ${({ theme: e }) => e.colors.text.standard};
    }
  }
`;
function ua(e, t) {
  const a = 2 * Math.tan(ne.degToRad(e.fov) / 2) * (e.position.z - t);
  return { width: a * e.aspect, height: a };
}
const fa = (e, t) => {
    let a = !1;
    for (const r of e)
      t.x < r.x + 1.5 * r.width &&
        t.x + 1.5 * t.width > r.x &&
        t.y < r.y + 1.5 * r.height &&
        1.5 * t.height + t.y > r.y &&
        (a = !0);
    return a;
  },
  va = (e, t) => {
    let a = !1;
    return (
      t.x < e.x + e.width &&
        t.x + t.width > e.x &&
        t.y < e.y + e.height &&
        t.height + t.y > e.y &&
        (a = !0),
      a
    );
  },
  Ea = (e, t) => (
    ia
      .set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
      .normalize()
      .multiplyScalar(t),
    { x: ia.x, y: ia.y }
  );
function wa(e) {
  const t = p.exports.useRef(),
    a = p.exports.useRef(),
    r = p.exports.useRef(),
    s = U((e) => e.camera),
    n = F(),
    { width: l, height: c, x: m, y: h } = e.itemData,
    [g, x] = p.exports.useState(!1),
    u = p.exports.useRef({ value: 0 }),
    f = p.exports.useCallback(() => {
      (ca.current.enabled = !0),
        d.to(t.current.position, {
          x: m,
          y: h,
          z: 0,
          duration: 0.5,
          ease: "Power3.easeOut",
          onComplete: () => (ga.current = { isOpened: !1, id: null }),
        }),
        d
          .timeline()
          .to(oa.current.material, { opacity: 0 })
          .set(oa.current.position, { z: -1.2 }),
        d.to(r.current, { opacity: 0 });
    }, []),
    v = p.exports.useCallback(() => {
      (ca.current.enabled = !1),
        (ga.current = { isOpened: !0, id: e.project.id }),
        d.to(t.current.position, {
          x: s.position.x,
          y: s.position.y,
          z: s.position.z - 0.5,
          duration: 0.5,
          ease: "Power3.easeOut",
        }),
        d
          .timeline()
          .set(oa.current.position, { z: s.position.z - 0.6 })
          .to(oa.current.material, { opacity: 0.7 }),
        d.to(r.current, { opacity: 1 });
    }, []),
    E = p.exports.useCallback(() => {
      (ga.current.isOpened && ga.current.id !== e.project.id) ||
        (ga.current.isOpened ? f() : v());
    }, [f, v]);
  return (
    O((e, t) => {
      (a.current.time += t), (a.current.speed = 15 * ha.current);
    }),
    p.exports.useLayoutEffect(() => {
      let e;
      return (
        (ue.current = g),
        r.current &&
          u.current &&
          !ga.current.isOpened &&
          (e = d.to(u.current, {
            value: g ? 1 : 0,
            onUpdate: () => {
              u.current && (r.current.opacity = u.current.value);
            },
          })),
        () => {
          e && e.kill(), (ue.current = !1);
        }
      );
    }, [g]),
    p.exports.useEffect(() => {
      const e = (e) => {
        "Escape" === e.key && f();
      };
      return (
        window.addEventListener("keydown", e),
        () => {
          window.removeEventListener("keydown", e);
        }
      );
    }, []),
    b.createElement(
      "mesh",
      o(i({}, e), {
        onClick: E,
        onPointerOver: () => x(!0),
        onPointerOut: () => x(!1),
        ref: t,
        position: [m, h, 0],
      }),
      b.createElement("planeGeometry", { args: [l, c, 32, 32] }),
      b.createElement("distortionMaterial", {
        frameAspect: l / c,
        textureAspect:
          e.texture.image.naturalWidth / e.texture.image.naturalHeight,
        ref: a,
        tex: e.texture,
      }),
      b.createElement(
        le,
        {
          font: ve,
          anchorY: "top",
          anchorX: "left",
          textAlign: "left",
          maxWidth: l,
          position: [-l / 2, -(c / 2 + 0.1), 0.001],
          fontSize: 0.14,
        },
        b.createElement("meshBasicMaterial", {
          ref: r,
          transparent: !0,
          color: n.colors.text.standard,
          attach: "material",
        }),
        e.project.name.toUpperCase()
      )
    )
  );
}
const Na = new G(),
  ya = () => {
    const e = U((e) => e.camera),
      t = B(sa.map((e) => e.coverImg)),
      [a, r] = p.exports.useState([]),
      s = p.exports.useRef(new G(0, 0, 0)),
      n = p.exports.useRef(!1),
      l = p.exports.useRef(0),
      c = p.exports.useRef(2),
      m = p.exports.useRef(),
      d = p.exports.useRef(),
      h = p.exports.useRef([]),
      g = p.exports.useRef(),
      x = p.exports.useRef({
        min: new G(-10, -10, -10),
        max: new G(10, 10, 10),
      });
    return (
      O(({ camera: e }, t) => {
        let r = s.current.distanceTo(e.position) > 0.005;
        (ha.current = H(ha.current, e.position.distanceTo(s.current), 0.2, t)),
          s.current.copy(e.position);
        const i = n.current && !ga.current.isOpened ? 0.3 : 0;
        c.current = H(c.current, i, 0.2, t);
        let o = n.current && !ga.current.isOpened ? 0.2 : 0;
        (o += 3 * ha.current),
          (l.current = H(l.current, o, 0.2, t)),
          na.distortion.set(l.current, l.current),
          na.focalLength.set(1 - c.current, 1 - c.current);
        let p = 100 * (1 - (e.position.y / d.current.height + 0.5)) + "%",
          x = 100 * (e.position.x / d.current.width + 0.5) + "%";
        (da.current.style.top = p),
          (da.current.style.left = x),
          r &&
            ((g.current = da.current.getBoundingClientRect()),
            a.length &&
              pa.current.forEach((e, t) => {
                va(g.current, h.current[t])
                  ? e.classList.add("is-active")
                  : e.classList.remove("is-active");
              }),
            (m.current = ua(e, 0)),
            (da.current.style.width = 10 * m.current.width + "px"),
            (da.current.style.height = 10 * m.current.height + "px"));
      }),
      p.exports.useEffect(() => {
        if (!t) return;
        let a = [],
          s = 0,
          n = 0,
          l = 0,
          c = 0;
        t.forEach((e, t) => {
          let r;
          const m = e.image.naturalWidth / e.image.naturalHeight;
          r = m < 1 ? { width: 2 * m, height: 2 } : { width: 2, height: 2 / m };
          let d = { x: 0, y: 0, width: r.width, height: r.height };
          if (0 === t) return void a.push(d);
          let p,
            h = !1,
            g = 0,
            x = 2;
          for (; !h; )
            (p = Ea(0, x)),
              (h = !fa(
                a,
                o(i({}, p), { width: d.width, height: d.height + 0.35 })
              )),
              g++,
              g > 10 && (x += 0.1);
          (s = Math.min(s, p.x - d.width)),
            (l = Math.max(l, p.x + d.width)),
            (n = Math.min(n, p.y - d.height)),
            (c = Math.max(c, p.y + d.height)),
            a.push(i(i({}, d), p));
        }),
          x.current.min.set(s - -2, n - -2, -10),
          x.current.max.set(l + -2, c + -2, 10),
          (d.current = { width: l - s, height: c - n }),
          (m.current = ua(e, 0)),
          (da.current.style.width = 10 * m.current.width + "px"),
          (da.current.style.height = 10 * m.current.height + "px"),
          (ma.current.style.width = 10 * d.current.width + "px"),
          (ma.current.style.height = 10 * d.current.height + "px"),
          (pa.current = ma.current.querySelectorAll(".item")),
          (g.current = da.current.getBoundingClientRect()),
          setTimeout(() => {
            pa.current.forEach((e, t) => {
              (e.style.left = 10 * a[t].x + "px"),
                (e.style.top = 10 * (1 - a[t].y) + "px"),
                (e.style.width = 10 * a[t].width + "px"),
                (e.style.height = 10 * a[t].height + "px");
              const r = e.getBoundingClientRect();
              h.current.push(r),
                va(g.current, r)
                  ? e.classList.add("is-active")
                  : e.classList.remove("is-active");
            });
          }, 10),
          r(a);
      }, [t]),
      p.exports.useLayoutEffect(() => {
        const t = () => {
          Na.copy(ca.current.target),
            ca.current.target.clamp(x.current.min, x.current.max),
            Na.sub(ca.current.target),
            e.position.sub(Na);
        };
        return (
          ca.current.addEventListener("change", t),
          () => ca.current.removeEventListener("change", t)
        );
      }, []),
      p.exports.useEffect(() => {
        (ga.current = { isOpened: !1, id: null }), (ha.current = 1e3);
      }, []),
      b.createElement(
        b.Fragment,
        null,
        b.createElement(ee, {
          ref: ca,
          panSpeed: 2,
          mouseButtons: { LEFT: te.PAN },
          touches: { ONE: ae.PAN },
          enableRotate: !1,
          enableZoom: !0,
          screenSpacePanning: !0,
          minDistance: 1,
          maxDistance: 1.6,
        }),
        b.createElement(
          re,
          { ref: oa, "position-z": -1.2, args: [30, 30] },
          b.createElement("meshBasicMaterial", {
            color: "black",
            transparent: !0,
            opacity: 0,
            attach: "material",
          })
        ),
        b.createElement(
          "group",
          null,
          b.createElement(re, {
            onPointerDown: () => (n.current = !0),
            onPointerUp: () => (n.current = !1),
            visible: !1,
            "position-z": -0.05,
            args: [50, 50],
          }),
          a.length &&
            sa.map((e, r) =>
              b.createElement(wa, {
                itemData: a[r],
                index: r,
                key: e.name + r,
                texture: t[r],
                project: sa[r],
              })
            )
        )
      )
    );
  },
  ba = () => {
    const e = Q(se);
    return b.createElement(
      vt,
      { hasFooter: !1, hasTransitionPanel: !0 },
      b.createElement(
        xa,
        null,
        b.createElement(
          _,
          {
            dpr: [1, 1.5],
            mode: "concurrent",
            camera: { position: [0, 0, 1.2], fov: 140, far: 10 },
          },
          b.createElement(
            e,
            null,
            b.createElement(
              p.exports.Suspense,
              { fallback: null },
              b.createElement(ya, null)
            ),
            b.createElement(la, null)
          )
        ),
        b.createElement(
          "div",
          { ref: ma, className: "map" },
          b.createElement(
            "div",
            { className: "item-container" },
            sa.map((e, t) =>
              b.createElement(k.div, {
                key: e.id,
                initial: { opacity: 0 },
                animate: {
                  opacity: 1,
                  transition: { delay: 0.4 + t / 15, duration: 0.4 },
                },
                className: "item",
              })
            )
          ),
          b.createElement(k.div, {
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.6 + sa.length / 10 },
            },
            ref: da,
            className: "position",
          })
        )
      )
    );
  },
  ka = E.div`
  .hero-title {
    h1 {
      opacity: 1 !important;
    }
  }
  /* img{
    @media (max-width: 480px) {
      margin-left: -28px;
      width: 100vw;
      height: auto;
      object-fit: cover;
    }
  } */
  video{
    width:100%;
    height: auto;
    object-fit: cover;
  }
  img.little{
      width:80%
      @media (max-width: 900px) {
        width: 100%;
      }
    }
  .img_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    img.duo {
      width: 46%;
      @media (max-width: 900px) {
        width: 100% !important;
      }
    }
    img.trio{
      width: 160px
    }

    svg {
      width: 30%;
      margin: 40px 0;
      @media (max-width: 900px) {
        width: 100%;
      }
      @media (max-width: 600px) {
        margin: 0px 0;
    }
    }
  }
  .mini{
    justify-content: center;
    img{
      width: 170px;
      margin: 0 50px;
    }
  }
  img.step {
    width: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 900px) {
      width: 100%;
    }
  }
  .hero {
    width: 100vw;
    height: 80vh;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media (max-width: 600px) {
      height: 60vh;
    }
  }
  /* responsive */
  .responsive {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    img {
      width: 20%;
      margin: 20px;
      @media (max-width: 1000px) {
        width: 30%;
        margin: 30px;
      }
      @media (max-width: 600px) {
        width: 40%;
        margin: 20px 0;
      }
    }
    @media (max-width: 600px) {
        justify-content: space-around;
      }
  }
  img.full-img {
    width: 100vw;
    margin-left: -10vw;
    height: 80vh;
    object-fit: cover;
    @media (max-width: 769px) {
      margin-left: -40px;
    }
    @media (max-width: 480px) {
      margin-left: -28px;
    }
  }
  h3.text-h3 {
    margin-bottom: 40px;
  }
  p {
    width: 50%;
    @media (max-width: 900px) {
      width: 100%;
    }
  }
  .hero-title {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;

    .big-title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 200px;
      text-transform: uppercase;
      color: white;
      font-family: Ginger;
      white-space: nowrap;
      @media (max-width: 900px) {
          font-size: 80px;
      }
    }
  }
  /* Separator with text */
  .headline {
    text-transform: uppercase;
    text-align: center;
    opacity: 1;
    @media (max-width: 480px) {
      font-size: 12px;
    }
  }

  .separator {
    margin-top: 20px;
    margin-bottom: 50px;
    width: 100%;
    height: 2px;
    background-color: ${({ theme: e }) => e.colors.text.standard};
    opacity: 0.2;

    @media (max-width: 769px) {
      margin-top: 14px;
      margin-bottom: 30px;
    }

    @media (max-width: 480px) {
      margin-top: 10px;
      margin-bottom: 15px;
    }
  }
  .details {
    height: auto;
    ${we};
    img.visual {
      width: 100vw;
      height: auto;
      margin-left: -10vw;
      @media (max-width: 769px) {
        margin-left: -40px;
      }
      @media (max-width: 480px) {
        margin-left: -28px;
      }
    }
    .text-h2.title {
      width: 50%;
      @media (max-width: 900px) {
        width: 100%;
      }
    }
    .infos {
      width: 100%;
      display: flex;
      .infos-intro {
        width: 50%;
        display: flex;
        flex-direction: column;
        /* font-family: "NeueMontrealLight"; */
        p {
          width: 100%;
        }
        @media (max-width: 900px) {
          width: 100%;
        }
        .text-link.website-link {
          position: relative;
          margin-top: 30px;
          &::after {
            position: absolute;
            content: "→";
            transform: translateX(10px);
            transition: transform 0.4s;
          }
          &:hover {
            &::after {
              transform: translateX(15px);
            }
          }
        }
      }
      .infos-column {
        margin-top: 15px;
        padding-left: 15%;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .text-h6 {
          margin-bottom: 30px;
        }
        @media (max-width: 900px) {
          width: 100%;
          margin-top: 80px;
        }
        @media (max-width: 600px) {
          margin-top: 50px;
        }
      }
      @media (max-width: 900px) {
        flex-direction: column;
        .infos-intro,
        .infos-column {
          width: 100%;
          /* background: red; */
          padding-left: 0;
          margin-bottom: 20px;
        }
      }
    }
    /* chart */
    .chart {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      h4.text-h4 {
        margin-bottom: 0px;
        margin-top: 50px;
      }
      .art-direction {
        width: 100%;
      }
      .typography,
      .colors {
        width: 50%;
        @media (max-width: 900px) {
          width: 100%;
        }
        h4.text-h4 {
          margin-bottom: 30px;
          @media (max-width: 480px) {
            margin-bottom: 20px;
          }
        }
        .color {
          display: flex;
          justify-content: center;
          align-items: center;
          text-transform: uppercase;
          font-family: NeueMontrealRegular;
          font-size: 16px;
          width: 70%;
          height: 60px;
          margin: 15px 0;
          border-radius: 6px;
          border: solid 0.5px ${({ theme: e }) => e.colors.text.disabled};
          @media (max-width: 900px) {
            width: 100%;
          }
        }
      }
      .colors {
        padding-left: 10%;
        @media (max-width: 900px) {
          padding-left: 0%;
        }
      }
      .typography {
        display: flex;
        flex-direction: column;
        span.text-typo {
          font-size: 50px;
          margin-bottom: 40px;
          line-height: 1.3;
          color: ${({ theme: e }) => e.colors.text.standard};
          @media (max-width: 900px) {
            font-size: 40px;
          }
          @media (max-width: 480px) {
            font-size: 38px;
          }
        }
      }
    }
  }
  .next-project {
    display: block;
    width: 100vw;
    height: 100vh;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .text-h1 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-transform: uppercase;
      color: white;
      font-size: 200px;
      font-family: Ginger;
      white-space: nowrap;
      @media (max-width: 900px) {
        font-size: 80px;
      }
    }
  }
`,
  ja = ({ project: e }) => {
    const t = e.component,
      [a, r] = p.exports.useState(!1),
      s = z(),
      n = p.exports.useRef(null),
      l = e.index >= Ze.length - 1 ? null : `/works/${Ze[e.index + 1].path}`,
      { scrollY: i } = w(),
      o = N(i, { damping: 20, mass: 0.21, stiffness: 100 });
    return (
      p.exports.useLayoutEffect(() => {
        const e = o.onChange((e) => {
          Math.abs(o.getVelocity()) > 200 ||
            (e + 20 >= n.current.scrollHeight - window.innerHeight &&
              l &&
              s.push(l));
        });
        return () => e();
      }, [i, n]),
      b.createElement(
        vt,
        {
          hasFooter: !1,
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          hasTransitionPanel: !0,
        },
        b.createElement(
          ka,
          { ref: n },
          b.createElement(
            "div",
            { className: "hero-title" },
            b.createElement("h1", { className: "big-title" }, e.name)
          ),
          b.createElement(
            "div",
            { className: "hero" },
            b.createElement(k.img, {
              onLoad: () => r(!0),
              initial: { opacity: 0 },
              animate: { opacity: a ? 1 : 0 },
              src: e.coverImg,
            })
          ),
          b.createElement("div", { className: "spacer" }),
          b.createElement(
            "div",
            { className: "details" },
            b.createElement("h2", { className: "text-h2 title" }, e.title),
            b.createElement(
              "div",
              { className: "infos" },
              b.createElement(
                "div",
                { className: "infos-intro" },
                b.createElement(
                  "p",
                  { className: "text-description" },
                  e.description
                ),
                e.websiteLink &&
                  b.createElement(
                    "a",
                    {
                      className: "text-link website-link",
                      href: e.websiteLink,
                      target: "_blank",
                    },
                    "Visit the website"
                  )
              ),
              b.createElement(
                "div",
                { className: "infos-column" },
                b.createElement("h3", { className: "text-h5" }, "Date"),
                b.createElement("div", { className: "text-h6" }, e.date),
                b.createElement("h3", { className: "text-h5" }, "Roles"),
                b.createElement("div", { className: "text-h6" }, e.role),
                b.createElement("h3", { className: "text-h5" }, "Techs"),
                b.createElement("div", { className: "text-h6" }, e.techs)
              )
            ),
            b.createElement("div", { className: "spacer" }),
            b.createElement(Ce, { src: e.visual1, alt: "visual" }),
            b.createElement("div", { className: "spacer" }),
            b.createElement(t, null)
          ),
          l &&
            b.createElement(
              I,
              { className: "next-project", to: l },
              b.createElement("img", { src: Ze[e.index + 1].coverImg }),
              b.createElement(
                "div",
                { className: "text-h1" },
                Ze[e.index + 1].name
              )
            )
        )
      )
    );
  },
  Ia = E.div`
  display: flex;
  justify-content: flex-end;
  pointer-events: auto;
  width: 20px;

  ul {
    display: flex;
    flex-flow: row nowrap;
    align-items: baseline;
  }
`,
  Ma = E(k.li)`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  &:not(:first-child) {
    margin-left: 8px;
  }
  .point {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background: ${({ activeColorIndex: e }) => e};
  }

  .text {
    writing-mode: vertical-rl;
    text-transform: uppercase;
    color: transparent;
    transform: rotate(180deg);
    margin-bottom: 14px;
    font-size: 12px;
    transition: color 0.4s;
  }
  &:hover {
    .text {
      color: ${({ theme: e }) => e.colors.text.standard};
    }
  }
`,
  Da = () => {
    const e = p.exports.useRef(),
      t = fe((e) => e.activeColorIndex),
      a = fe((e) => e.setActiveColorIndex),
      r = fe((e) => e.isDarkMode),
      [s, n] = p.exports.useState(r ? be : ke),
      [l, i] = p.exports.useState(r ? Ie[t] : De[t]);
    ((e, t) => {
      const a = (a) => {
        e.current && !e.current.contains(a.target) && t();
      };
      p.exports.useEffect(
        () => (
          document.addEventListener("click", a),
          () => {
            document.removeEventListener("click", a);
          }
        )
      );
    })(e, () => c(!1));
    const [o, c] = p.exports.useState(!1),
      m = (e) =>
        r
          ? Ie.findIndex((t) => t.name === e)
          : De.findIndex((t) => t.name === e);
    return (
      p.exports.useEffect(() => {
        n(r ? be : ke), i(r ? Ie[t] : De[t]);
      }, [r, t]),
      b.createElement(
        Ia,
        { ref: e },
        b.createElement(
          "ul",
          null,
          b.createElement(
            D,
            null,
            o &&
              s
                .filter((e) => e.name !== l.name)
                .map((e, t) =>
                  b.createElement(
                    Ma,
                    {
                      key: e.name,
                      onClick: () => {
                        a(m(e.name)), c((e) => !e);
                      },
                      activeColorIndex: e.color,
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                    },
                    b.createElement("div", { className: "text" }, e.name),
                    b.createElement("button", { className: "point" })
                  )
                ),
            b.createElement(
              Ma,
              {
                onClick: () => {
                  o && a(m(l.name)), c((e) => !e);
                },
                activeColorIndex: l.colors.primary1,
              },
              b.createElement(
                k.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  key: l.name,
                  className: "text",
                },
                l.name
              ),
              b.createElement("div", { className: "point" })
            )
          )
        )
      )
    );
  },
  Fa = E.div`
  position: fixed;
  width: 100vw;
  display: flex;
  flex-flow: row nowrap;
  align-items: baseline;
  justify-content: space-between;
  bottom: 60px;
  z-index: 100;
  align-items: flex-end;
  ${Ne};
  pointer-events: none;
  color: ${({ theme: e }) => e.colors.text.standard};
  font-family: "NeueMontrealRegular";
  font-size: 12px;
  .theme-toggle {
    pointer-events: auto;
    margin-top: 20px;
    border: solid 1px ${({ theme: e }) => e.colors.text.disabled};
    border-radius: 30px;
    padding: 5px 14px;
    transition: background-color 0.4s;
    &:hover{
      background-color: ${({ theme: e }) => e.colors.text.disabled};
    }
  }
  .project{
    pointer-events: auto;
    display: flex;
    flex-wrap: wrap;
    width: 33px;
    .round{
      margin: 3px 2px;
      width: 12px;
      height: 12px;
      border-radius: 100%;
      background-color: ${({ theme: e }) => e.colors.text.disabled};
      transition: background-color 0.5s;
    }
    &:hover{
      .round{
        background-color: ${({ theme: e }) => e.colors.text.standard};
      }
    }
  }
  .style{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 600px){
    bottom: 28px;
    font-size: 12px;
  }

`,
  Ca = () => {
    const e = fe((e) => e.toggleDarkMode),
      t = fe((e) => e.isDarkMode);
    return b.createElement(
      Fa,
      null,
      b.createElement(
        I,
        { to: "/works" },
        b.createElement(
          "div",
          { className: "project" },
          b.createElement("div", { className: "round" }),
          b.createElement("div", { className: "round" }),
          b.createElement("div", { className: "round" }),
          b.createElement("div", { className: "round" })
        )
      ),
      b.createElement(
        "div",
        { className: "style" },
        b.createElement(Da, null),
        b.createElement(
          "button",
          { onClick: e, className: "theme-toggle" },
          t ? "LIGHT" : "DARK"
        )
      )
    );
  },
  za = () => {
    const e = p.exports.useRef(null);
    let t = p.exports.useMemo(
      () =>
        Ze.map((e, t) =>
          b.createElement(ie, {
            path: `/works/${e.path}`,
            key: t,
            component: (a) =>
              b.createElement(ja, i({ index: t, project: e }, a)),
          })
        ),
      []
    );
    const a = A("(min-width:769px)");
    return b.createElement(
      b.Fragment,
      null,
      a && b.createElement(ot, null),
      b.createElement(Je, null),
      b.createElement(Ca, null),
      b.createElement(st, null),
      b.createElement(
        "div",
        { "data-app-container": !0, ref: e },
        b.createElement(ie, {
          render: ({ location: e }) =>
            b.createElement(
              D,
              { exitBeforeEnter: !0, initial: !0 },
              b.createElement(
                oe,
                { location: e, key: e.pathname },
                t,
                b.createElement(ie, {
                  path: "/works",
                  exact: !0,
                  component: aa,
                }),
                b.createElement(ie, {
                  path: "/about",
                  exact: !0,
                  component: Xt,
                }),
                b.createElement(ie, {
                  path: "/random",
                  exact: !0,
                  component: ba,
                }),
                b.createElement(ie, { path: "/", component: Gt })
              )
            ),
        })
      )
    );
  },
  Ra = () => {
    const e = fe((e) => e.isDarkMode),
      t = fe((e) => e.activeColorIndex);
    return b.createElement(
      ce,
      { theme: e ? Ie[t] : De[t] },
      b.createElement(ye, null),
      b.createElement(me, null, b.createElement(za, null))
    );
  };
de.render(
  b.createElement(b.StrictMode, null, b.createElement(Ra, null)),
  document.getElementById("root"),
  () => (window.hasMounted = !0)
);
// other routes defined before catch-all 
server.get('/works', (req, res) => {
  res.send('ok')
});

// final catch-all route to index.html defined last 
server.get('*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
