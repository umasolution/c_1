!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="162c3b75-f228-4fe2-8b23-170f89393d38",e._sentryDebugIdIdentifier="sentry-dbid-162c3b75-f228-4fe2-8b23-170f89393d38")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"1673a34633f781d35f25157d66288c471b14a4df"},(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[8282],{38282:function(e,n,t){t.r(n);t(66992),t(41539),t(88674),t(78783),t(33948);var r=t(67294),o=t(2145),a=t(64487),i=t(54576),c=t(9058),u=t(92501),l=t(13477),d=t(49254),s=t(39469),f=t(24533),g=t(7335),v=t(52971),m=t(85456),y=t(78266),b=(0,o.Z)((function(){return Promise.all([t.e(3241),t.e(1115),t.e(6613),t.e(6143),t.e(2934)]).then(t.bind(t,66143))}),"Layout"),p=(0,i.withChartProvider)((function(){var e=(0,l.Iy)("isLoaded"),n=(0,l.Iy)("email"),t=(0,m.gs)(v.Ew.performanceCookies.id),o=(0,l.jr)(),i=(0,l.Iy)("isAnonymous"),c=(0,s.Hu)();return(0,r.useEffect)((function(){i||c()}),[i]),(0,r.useEffect)((function(){if(o&&n&&t)try{a.av({id:o,email:n})}catch(e){console.warn("Sentry: unable to set user")}}),[n,t,o]),(0,g.aG)(o),(0,s.ZP)(),(0,d.ZP)(),(0,f.ZP)(),r.createElement(r.Suspense,{fallback:r.createElement(y.Z,null)},r.createElement(b,{isUserLoaded:e}))}));n.default=(0,u.Pf)((function(){var e=(0,c.e)().getRoot();return r.createElement(p,{chart:e})}))},94221:function(e,n,t){t.d(n,{c:function(){return i}});t(41539),t(39714),t(66992),t(78783),t(33948),t(41637);var r=t(26398),o=t(64637),a=function(e){return window.localNetdataRegistry.mg=e.agent.mg,window.localNetdataRegistry.hostname=(0,o.lV)(e.agent.nm||"agent"),{cloudStatus:e.cloud.status,canBeClaimed:e.can_be_claimed,keyFilename:e.key_filename,claimId:e.cloud.claim_id,mg:e.agent.mg,nd:e.agent.nd,success:e.success,message:e.message}},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.key,t=e.token,o=e.rooms,i=e.url,c=new URLSearchParams({key:n,rooms:o,token:t,url:i}).toString();return c=n&&o&&t&&i&&c?"?".concat(c):"",r.Z.get("/api/v2/claim".concat(c),{baseURL:window.envSettings.agentApiUrl,transform:a})}},24533:function(e,n,t){t.d(n,{Hu:function(){return m},Lz:function(){return y}});t(47941),t(82526),t(57327),t(41539),t(88449),t(2490),t(59849),t(38880),t(15581),t(34514),t(54747),t(49337),t(33321),t(69070);var r=t(4942),o=t(29439),a=t(67294),i=t(4480),c=t(74059),u=t(13477),l=t(28234),d=t(94221);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var g=(0,i.xu)({key:"claimStatusAtom",default:{loaded:!1,loading:!1,cloudStatus:"disabled",canBeClaimed:!1,claimId:null,keyFilename:"",error:"",claiming:!1,claimingError:""}}),v=(0,i.xu)({key:"checkClaimStatus",default:function(){return 1}}),m=function(){var e,n=null===(e=window.localNetdataRegistry)||void 0===e?void 0:e.mg,t=(0,i.Zl)(v(n));return(0,a.useCallback)((function(){return t((function(e){return e+1}))}),[n])},y=function(){var e,n=null===(e=window.localNetdataRegistry)||void 0===e?void 0:e.mg,t=(0,i.FV)(g({machineGuid:n})),r=(0,o.Z)(t,2),c=r[0],u=r[1];return[c,(0,a.useCallback)((function(e){return u((function(n){return f(f({},n),e)}),[])}))]};n.ZP=function(){var e,n=(0,c.Q6)(),t=null===(e=window.localNetdataRegistry)||void 0===e?void 0:e.mg,r=(0,i.FV)(v(t)),s=(0,o.Z)(r,2),g=s[0],m=s[1],b=y(t),p=(0,o.Z)(b,2),w=p[0],O=p[1],h=w.loading,k=(0,u.Iy)("isAnonymous");return(0,a.useEffect)((function(){!h&&t&&n&&!k&&(O({loading:!0,nodeId:null,spaceId:null,roomIds:[]}),(0,d.c)().then((function(e){var n=e.data;O(f(f({loading:!1,loaded:!0},n),{},{error:""}))})).catch((function(e){var n,t=null===e||void 0===e||null===(n=e.response)||void 0===n?void 0:n.data;O({loading:!1,loaded:!0,error:(0,l.r)(null===t||void 0===t?void 0:t.errorMsgKey)||(null===t||void 0===t?void 0:t.errorMessage)||"Something went wrong",cloudStatus:"disabled",canBeClaimed:!1,keyFilename:""})})))}),[t,g,n,k]),f(f({},w),{},{checkAgain:m})}},39469:function(e,n,t){t.d(n,{Hu:function(){return w},zp:function(){return O}});t(47941),t(82526),t(57327),t(41539),t(88449),t(2490),t(59849),t(38880),t(15581),t(34514),t(54747),t(49337),t(33321),t(69070);var r,o=t(4942),a=t(29439),i=t(67294),c=t(4480),u=t(37176),l=t(74059),d=t(13477),s=t(28234),f=t(24533),g=t(18761);function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var y=null===(r=window.localNetdataRegistry)||void 0===r?void 0:r.mg,b=(0,c.xu)({key:"currentAgentBearerAtom",default:{loading:!1,token:localStorage.getItem("agentJWT:".concat(y))||"",expiration:localStorage.getItem("agentJWTExp:".concat(y))||null,bearerProtection:!0,error:""}}),p=(0,c.xu)({key:"checkAgentBearer",default:function(){return 1}}),w=function(){var e=(0,f.Lz)(),n=(0,a.Z)(e,1)[0].mg,t=(0,c.Zl)(p(n));return(0,i.useCallback)((function(){return t((function(e){return e+1}))}),[n])},O=function(){var e=(0,f.Lz)(),n=(0,a.Z)(e,1)[0],t=n.claimId,r=n.mg,o=n.nd;return(0,c.FV)(b({nodeId:o,machineGuid:r,claimId:t}))};n.ZP=function(){var e=(0,l.Q6)(),n=(0,f.Lz)(),t=(0,a.Z)(n,1)[0],r=t.claimId,o=t.mg,v=t.nd,y=(0,c.FV)(p(o)),b=(0,a.Z)(y,2),w=b[0],h=b[1],k=O(),P=(0,a.Z)(k,2),I=P[0],j=I.loading,S=I.token,Z=I.expiration,E=I.bearerProtection,A=I.error,D=P[1],R=(0,u.Z)(w),x=(0,d.Iy)("isAnonymous");return(0,i.useEffect)((function(){!j&&o&&e&&!x&&r&&v&&(w===R&&Z&&1e3*Z>(new Date).getTime()+3600||(D((function(e){return m(m({},e),{},{loading:!0})})),(0,g.op)(v,o,r).then((function(e){var n=e.data;D(m(m({loading:!1},n),{},{error:""})),localStorage.setItem("agentJWT:".concat(o),null===n||void 0===n?void 0:n.token),localStorage.setItem("agentJWTExp:".concat(o),null===n||void 0===n?void 0:n.expiration)})).catch((function(e){var n,t=null===e||void 0===e||null===(n=e.response)||void 0===n?void 0:n.data;localStorage.removeItem("agentJWT:".concat(o)),localStorage.removeItem("agentJWTExp:".concat(o)),D({loading:!1,token:"",expiration:null,bearerProtection:!0,error:(0,s.r)(null===t||void 0===t?void 0:t.errorMsgKey)||(null===t||void 0===t?void 0:t.errorMessage)||"Something went wrong"})}))))}),[o,Z,w,e,x,R]),{token:S,bearerProtection:E,checkAgain:h,error:A}}},49254:function(e,n,t){t.d(n,{Hu:function(){return m},ej:function(){return y}});t(47941),t(82526),t(57327),t(41539),t(88449),t(2490),t(59849),t(38880),t(15581),t(34514),t(54747),t(49337),t(33321),t(69070);var r=t(4942),o=t(29439),a=t(67294),i=t(4480),c=t(74059),u=t(13477),l=t(28234),d=t(18761);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var g=(0,i.xu)({key:"userAccessAtom",default:{loaded:!1,loading:!1,userStatus:"notLoggedIn",userNodeStatus:"noAccess",nodeId:null,spaceId:null,roomIds:[],error:""}}),v=(0,i.xu)({key:"checkUserAccess",default:function(){return 1}}),m=function(){var e,n=null===(e=window.localNetdataRegistry)||void 0===e?void 0:e.mg,t=(0,i.Zl)(v(n));return(0,a.useCallback)((function(){return t((function(e){return e+1}))}),[n])},y=function(){var e,n=null===(e=window.localNetdataRegistry)||void 0===e?void 0:e.mg;return(0,i.FV)(g({machineGuid:n}))};n.ZP=function(){var e,n=(0,c.Q6)(),t=null===(e=window.localNetdataRegistry)||void 0===e?void 0:e.mg,r=(0,i.FV)(v(t)),s=(0,o.Z)(r,2),g=s[0],m=s[1],b=y(t),p=(0,o.Z)(b,2),w=p[0],O=p[1],h=w.loading,k=(0,u.Iy)("isAnonymous");return(0,a.useEffect)((function(){!h&&t&&n&&!k&&(O((function(e){return f({loading:!0,nodeId:null,spaceId:null,roomIds:[]},e)})),(0,d.yM)(t).then((function(e){var n=e.data;O(f(f({loading:!1,loaded:!0},n),{},{error:""}))})).catch((function(e){var n,t=null===e||void 0===e||null===(n=e.response)||void 0===n?void 0:n.data;O({loading:!1,loaded:!0,error:(0,l.r)(null===t||void 0===t?void 0:t.errorMsgKey)||(null===t||void 0===t?void 0:t.errorMessage)||"Something went wrong",userStatus:"notLoggedIn",userNodeStatus:"noAccess",nodeId:null,spaceId:null,roomIds:[]})})))}),[t,g,n,k,h]),f(f({},w),{},{checkAgain:m})}},37176:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(67294);function o(e){var n=(0,r.useRef)();return(0,r.useEffect)((function(){n.current=e})),n.current}}}]);