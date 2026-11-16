/* Humgut 홈 버튼 — 어느 사이트에서든 사이트 모음(humgut1.github.io)으로 돌아가는 H 버튼.
   쓰는 법: <script src="https://humgut1.github.io/home.js" defer></script>
   위치 바꾸기: data-pos="bottom-right" | "top-left" | "top-right" (기본 bottom-left) */
(function () {
  if (window.__humgutHome) return;
  window.__humgutHome = 1;
  var HOME = 'https://humgut1.github.io/';
  if (location.href.split(/[?#]/)[0] === HOME) return; // 사이트 모음 자기 자신에서는 안 띄움

  var me = document.currentScript;
  var pos = (me && me.getAttribute('data-pos')) || 'bottom-left';
  var v = pos.indexOf('top') === 0 ? 'top' : 'bottom';
  var h = pos.slice(-5) === 'right' ? 'right' : 'left';

  function mount() {
    var host = document.createElement('div');
    host.setAttribute('data-humgut-home', '');
    var root = host.attachShadow ? host.attachShadow({ mode: 'open' }) : host;
    root.innerHTML =
      '<style>' +
      ':host{all:initial}' +
      'a{position:fixed;' + v + ':16px;' + h + ':16px;z-index:2147483000;width:44px;height:44px;display:grid;place-items:center;' +
      'border-radius:13px;background:#1E2430;border:2px solid #1E2430;box-shadow:3px 3px 0 #F2A33A;text-decoration:none;' +
      'transition:transform .12s,box-shadow .12s;-webkit-tap-highlight-color:transparent}' +
      'a:hover{transform:translate(-1px,-1px);box-shadow:4px 4px 0 #F2A33A}' +
      'a:active{transform:translate(2px,2px);box-shadow:1px 1px 0 #F2A33A}' +
      'a:focus-visible{outline:3px solid #F2A33A;outline-offset:3px}' +
      'svg{width:24px;height:24px;display:block}' +
      'span{position:absolute;' + h + ':54px;white-space:nowrap;font:600 13px/1 "Noto Sans KR","Malgun Gothic",sans-serif;' +
      'color:#fff;background:#1E2430;padding:7px 10px;border-radius:8px;opacity:0;pointer-events:none;transform:translateX(' + (h === 'left' ? '-4px' : '4px') + ');transition:opacity .15s,transform .15s}' +
      'a:hover span,a:focus-visible span{opacity:1;transform:none}' +
      '@media print{a{display:none}}' +
      '@media (prefers-reduced-motion:reduce){a,span{transition:none}}' +
      '</style>' +
      '<a href="' + HOME + '" aria-label="Humgut 사이트 모음으로 가기">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true">' +
      '<rect x="4" y="3" width="4.6" height="18" rx="1.6" fill="#F7F5F0"/>' +
      '<rect x="15.4" y="3" width="4.6" height="18" rx="1.6" fill="#F7F5F0"/>' +
      '<rect x="7" y="9.9" width="10" height="4.2" rx="1.4" fill="#F2A33A"/>' +
      '</svg><span>사이트 모음</span></a>';
    document.body.appendChild(host);
  }
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
})();
