!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="4266b73d-7666-4382-8c35-9dfbc5e056f8",e._sentryDebugIdIdentifier="sentry-dbid-4266b73d-7666-4382-8c35-9dfbc5e056f8")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"1673a34633f781d35f25157d66288c471b14a4df"},(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[3564],{16512:function(e,t,n){n.d(t,{Q0:function(){return l},R4:function(){return m},TT:function(){return c},WL:function(){return d},Y:function(){return i},by:function(){return u},qY:function(){return r},rU:function(){return f},xL:function(){return s}});var a=n(71893),o=n(64969),l=a.default.img.withConfig({displayName:"styled__Illustration",componentId:"sc-1yhntgl-0"})(["margin:0 auto;"]),r=(0,a.default)(o.Text).withConfig({displayName:"styled__StyledText",componentId:"sc-1yhntgl-1"})(["display:block;"]),i=a.default.div.withConfig({displayName:"styled__TextHeader",componentId:"sc-1yhntgl-2"})(["margin-bottom:",";font-weight:700;"],(0,o.getSizeBy)(2)),d=a.default.div.withConfig({displayName:"styled__StaticCheckmarks",componentId:"sc-1yhntgl-3"})(["margin-top:",";margin-bottom:",";"],(0,o.getSizeBy)(2),(0,o.getSizeBy)(5)),c=a.default.div.withConfig({displayName:"styled__CheckmarkLine",componentId:"sc-1yhntgl-4"})(["display:flex;align-items:center;"]),s=(0,a.default)(o.Icon).withConfig({displayName:"styled__StyledIcon",componentId:"sc-1yhntgl-5"})(["margin-right:4px;height:18px;> use{fill:",";}"],(0,o.getColor)("primary")),u=(0,a.default)(s).withConfig({displayName:"styled__HelpIcon",componentId:"sc-1yhntgl-6"})(["vertical-align:middle;"]),m=a.default.div.withConfig({displayName:"styled__LearnMoreSection",componentId:"sc-1yhntgl-7"})(["margin-top:",";"],(0,o.getSizeBy)(4)),f=a.default.a.withConfig({displayName:"styled__Link",componentId:"sc-1yhntgl-8"})(["text-decoration:underline;color:",";&:visited{color:",";}"],(0,o.getColor)("success"),(0,o.getColor)("success"))},43564:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var a=n(29439),o=n(67294),l=n(64969),r=n(46667),i=n(29748),d=n(5934),c=(n(92222),n(89250)),s=n(16645),u=n(7693),m=n(92903),f=n(62200),h=n(37518),b=n(74059),g=n(97723),y=n(87574),p=n(59112),w=n(16512),E=function(e){var t=e.onClose,n=(0,c.s0)(),r=(0,o.useState)(!1),i=(0,a.Z)(r,2),d=i[0],E=i[1],C=(0,o.useState)(""),v=(0,a.Z)(C,2),D=v[0],A=v[1],k=(0,b.OS)(),_=k.id,T=k.slug,x=(0,h.UL)(),S=(0,h.vf)(),L=(0,o.useCallback)((function(e){var a=e.slug;t(),n("/spaces/".concat(T,"/rooms/").concat(S,"/dashboards/").concat(a))}),[T,S]),I=(0,g.EW)(_,x,{onSuccess:L}),N=(0,o.useCallback)((function(){return I({name:D})}),[D]),M=D.length>0;return o.createElement(s.u6,{right:!0,closeOnEsc:!0,closeOnOverlayClick:!0,onClose:t},o.createElement(u.x,{onClose:t,title:"New Dashboard"},o.createElement(l.Button,{label:"Add",icon:"plus",onClick:N,"data-testid":"addNewDashboardModal-add-button"})),o.createElement(m.B,null,"Create new Dashboard"),o.createElement(s.TZ,null,o.createElement(p.Z,{value:D,label:"Name",onChange:function(e){A(e.target.value)},isValid:d,setIsValid:E,isDirty:M,instantFeedback:"all",onKeyDown:function(e){return e.keyCode===f.DV&&d&&N},"data-testid":"addNewDashboardModal-dashboardName-input"}),o.createElement(w.qY,null,o.createElement(w.Y,null,"What you can do with Dashboards?"),"Combine all the metrics that matter to you, from all the nodes that matter to you, into one clean interface that helps you visually detect anomalies as they\u2019re happening. Building a new dashboard will only take a few minutes, and the metrics are always real-time."),o.createElement(w.WL,null,o.createElement(w.TT,null,o.createElement(w.xL,{name:"check"}),o.createElement(l.Text,null,"Add charts from your infrastructure")),o.createElement(w.TT,null,o.createElement(w.xL,{name:"check"}),o.createElement(l.Text,null,"Group information in a meaningful way")),o.createElement(w.R4,null,o.createElement(w.by,{name:"help"}),o.createElement(l.Text,null,"Learn more about Dashboards")," ",o.createElement(w.rU,{href:"https://learn.netdata.cloud/docs/cloud/visualize/dashboards",target:"_blank",rel:"noopener noreferrer"},"In our documentation"))),o.createElement(w.Q0,{src:y.X})))},C=n(78266),v=(n(26699),n(32023),n(15861)),D=n(64687),A=n.n(D),k=(n(21249),n(57640),n(9924),n(41539),n(64211),n(2490),n(41874),function(e){var t=e.handleOpenAddDashboardModal,n=e.hasPermissionToAddDashboard,a=e.hasPermissionToDeleteDashboard,l=(0,h.Hm)("name"),r=(0,g.qN)(),i=function(){var e=(0,v.Z)(A().mark((function e(t,n){var a,o;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Array.isArray(t)?t:[t],o=a.map((function(e){return e.id})),e.next=4,r({ids:o});case 4:n.resetRowSelection();case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=(0,o.useMemo)((function(){return{delete:{confirmLabel:"Yes, delete",confirmationMessage:function(e){return o.createElement(o.Fragment,null,"You are about to delete ",o.createElement("strong",null,e.name)," from ",o.createElement("strong",null,l),".",o.createElement("br",null),"Are you sure you want to continue?")},confirmationTitle:function(e){return"Delete ".concat(e.name)},declineLabel:"Cancel",handleAction:i,tooltipText:"Delete dashboard",isVisible:a}}}),[a]),c=(0,o.useMemo)((function(){return{addEntry:{handleAction:t,isVisible:n,tooltipText:"Create dashboard"},delete:{confirmLabel:"Yes, delete",confirmationMessage:function(e,t){return o.createElement(o.Fragment,null,"You are about to delete"," ",o.createElement("strong",null,t.length>1?"".concat(t.length," dashboards"):t[0].name)," ","from ",o.createElement("strong",null,l),".",o.createElement("br",null),"Are you sure you want to continue?")},confirmationTitle:function(){return"Delete"},disabledTooltipText:"Delete is disabled because you haven't selected dashboards",declineLabel:"Cancel",handleAction:i,tooltipText:"Delete dashboards",isVisible:a}}}));return{rowActions:a?d:[],bulkActions:[n,a].some(Boolean)?c:[]}}),_=n(47133),T=function(e){var t=new Date(e).toDateString().split(" "),n=(0,a.Z)(t,4),o=n[1],l=n[2],r=n[3];return"".concat(o," ").concat(l,", ").concat(r)},x=n(91008),S=n(33335),L=function(e){var t=e.handleOpenAddDashboardModal,n=(0,o.useState)(),l=(0,a.Z)(n,2)[1],r=(0,d.ie)(),i=(0,_.QF)(r),c=(0,S.gI)("dashboard:Create"),s=(0,S.gI)("dashboard:Delete"),u=(0,o.useMemo)((function(){return[{id:"name",accessorKey:"name",header:"Name",cell:function(e){var t=e.getValue,n=e.row;return o.createElement(x.Z,{as:"Link",to:n.original.slug},t())}},{id:"lastModified",accessorKey:"updatedAt",header:"Last modified",cell:function(e){var t=e.getValue;return T(t())}},{id:"createdAt",accessorKey:"createdAt",header:"Created",cell:function(e){var t=e.getValue;return T(t())}}]}),[]),m=k({dashboards:i,handleOpenAddDashboardModal:t,hasPermissionToAddDashboard:c,hasPermissionToDeleteDashboard:s});return{rowActions:m.rowActions,bulkActions:m.bulkActions,data:i,enableSelection:s,columns:u,enableSorting:!0,globalFilterFn:(0,o.useCallback)((function(e,t,n){var a=n.toLowerCase(),o=e.getValue("agent").toLowerCase(),l="".concat(T(e.getValue("lastModified")).toLowerCase()),r="".concat(T(e.getValue("createdAt")).toLowerCase());return o.includes(a)||l.includes(a)||r.includes(a)}),[]),setGlobalFilter:l}},I=function(e){var t=e.handleOpenAddDashboardModal,n=L({handleOpenAddDashboardModal:t}),a=n.enableSelection,r=n.columns,i=n.data,d=n.rowActions,c=n.bulkActions,s=n.enableSorting,u=n.globalFilterFn,m=n.setGlobalFilter;return o.createElement(l.Flex,{column:!0,overflow:"auto",padding:[0,0,4]},o.createElement(l.NetdataTable,{rowActions:d,enableSelection:a,data:i,dataColumns:r,bulkActions:c,enableSorting:s,globalFilterFn:u,onGlobalSearchChange:m,testPrefixCallback:function(e){return e.name}}))},N=function(){(0,i.Z)();var e=(0,r.Z)(!1),t=(0,a.Z)(e,4),n=t[0],c=t[2],s=t[3];return(0,d.L)()?o.createElement(l.Flex,{position:"relative",width:"100%",height:"100%",flex:!0,column:!0,padding:[4]},o.createElement(I,{handleOpenAddDashboardModal:c}),n&&o.createElement(E,{onClose:s})):o.createElement(C.Z,{title:"Loading dashboards..."})}}}]);