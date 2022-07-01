// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n=function(n){return Math.abs(n)};var r=function(n){return n!=n},t=Number.POSITIVE_INFINITY;var u=r,e=function(n){return 0===n&&1/n===t};var i=function(){var n;return function(r){if(0===arguments.length)return void 0===n?null:n;(void 0===n||r>n||u(r)||r===n&&e(r))&&(n=r);return n}};function a(){var r=i();return function(t){if(0===arguments.length)return r();return r(n(t))}}export{a as default};
//# sourceMappingURL=mod.js.map
