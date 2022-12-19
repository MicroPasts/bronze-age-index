"use strict";(self.webpackChunkbronze_age_index=self.webpackChunkbronze_age_index||[]).push([[22],{738:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(7294),n=a(5697),s=a.n(n),c=a(7500),l=a(682);function o(e){const{pageContext:t}=e,{pageNumber:a,numberOfPages:n,humanPageNumber:s,previousPagePath:o,nextPagePath:i}=t;return r.createElement(l.Z,null,r.createElement("nav",{className:"pagination py-2"},s>1?r.createElement(c.Link,{title:"Go to previous page",to:o},"← Previous"):r.createElement("span",null),r.createElement("strong",null,"Page ",a+1," of ",n),s<n?r.createElement(c.Link,{title:"Go to next page",to:i},"Next →"):r.createElement("span",null)))}o.propType={pageContext:s().object.isRequired}},8770:function(e,t,a){a.r(t),a.d(t,{Head:function(){return b},default:function(){return g}});var r=a(7294),n=a(554),s=a(1555),c=a(6272),l=a(3226),o=a(7500),i=a(3723);var d=e=>{let{post:t}=e;return r.createElement(s.Z,{md:4,className:"mb-3"},r.createElement(c.Z,{className:"border-0 bg-light"},r.createElement(c.Z.Body,{className:"bg-white border-0 rounded-0"},null!==t.thumbnail&&r.createElement(l.Z,{className:"card-img-top rounded-0",as:i.G,image:(0,i.c)(t.cover),alt:t.frontmatter.title}),null===t.thumbnail&&r.createElement(c.Z.Img,{src:"/img.png",alt:"Card image",width:300,height:300}),r.createElement("div",{className:"h-100",style:{minHeight:70}},r.createElement(o.Link,{to:"/projects/"+t.frontmatter.slug,className:"stretched-link stretched-link__blog_post"},r.createElement("h1",{className:"lead text-black fw-bold mt-3"},t.frontmatter.title))))))},m=a(682),u=a(4051),p=a(9357),f=a(738);var g=e=>{const t=e.data.allMarkdownRemark.edges.map((e=>r.createElement(d,{key:e.node.id,post:e.node})));return r.createElement(n.Z,null,r.createElement(m.Z,{className:"content"},r.createElement(u.Z,null,r.createElement("h1",{className:"ml-4 mt-4"},"The Citizen Science Projects behind the index")),r.createElement(u.Z,null,t)),r.createElement(m.Z,{fluid:!0,className:"mx-auto text-center bg-pastel"},r.createElement(f.Z,{pageContext:e.pageContext})))};const b=()=>r.createElement(p.Z,{title:"The Bronze Age Index Cit Sci projects",description:"The Bronze Age Index citizen science projects paginated"})},6272:function(e,t,a){a.d(t,{Z:function(){return y}});var r=a(4184),n=a.n(r),s=a(7294),c=a(6792),l=a(4680),o=a(9602),i=a(3226);const d=s.createContext(null);d.displayName="CardHeaderContext";var m=d,u=a(5893);const p=s.forwardRef((({bsPrefix:e,className:t,as:a="div",...r},l)=>{const o=(0,c.vE)(e,"card-header"),i=(0,s.useMemo)((()=>({cardHeaderBsPrefix:o})),[o]);return(0,u.jsx)(m.Provider,{value:i,children:(0,u.jsx)(a,{ref:l,...r,className:n()(t,o)})})}));p.displayName="CardHeader";var f=p;const g=(0,o.Z)("h5"),b=(0,o.Z)("h6"),x=(0,l.Z)("card-body"),v=(0,l.Z)("card-title",{Component:g}),h=(0,l.Z)("card-subtitle",{Component:b}),N=(0,l.Z)("card-link",{Component:"a"}),E=(0,l.Z)("card-text",{Component:"p"}),Z=(0,l.Z)("card-footer"),C=(0,l.Z)("card-img-overlay"),P=s.forwardRef((({bsPrefix:e,className:t,bg:a,text:r,border:s,body:l,children:o,as:i="div",...d},m)=>{const p=(0,c.vE)(e,"card");return(0,u.jsx)(i,{ref:m,...d,className:n()(t,p,a&&`bg-${a}`,r&&`text-${r}`,s&&`border-${s}`),children:l?(0,u.jsx)(x,{children:o}):o})}));P.displayName="Card",P.defaultProps={body:!1};var y=Object.assign(P,{Img:i.Z,Title:v,Subtitle:h,Body:x,Link:N,Text:E,Header:f,Footer:Z,ImgOverlay:C})},3226:function(e,t,a){var r=a(4184),n=a.n(r),s=a(7294),c=a(6792),l=a(5893);const o=s.forwardRef((({bsPrefix:e,className:t,variant:a,as:r="img",...s},o)=>{const i=(0,c.vE)(e,"card-img");return(0,l.jsx)(r,{ref:o,className:n()(a?`${i}-${a}`:i,t),...s})}));o.displayName="CardImg",t.Z=o},4680:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(4184),n=a.n(r),s=/-(.)/g;var c=a(7294),l=a(6792),o=a(5893);const i=e=>{return e[0].toUpperCase()+(t=e,t.replace(s,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function d(e,{displayName:t=i(e),Component:a,defaultProps:r}={}){const s=c.forwardRef((({className:t,bsPrefix:r,as:s=a||"div",...c},i)=>{const d=(0,l.vE)(r,e);return(0,o.jsx)(s,{ref:i,className:n()(t,d),...c})}));return s.defaultProps=r,s.displayName=t,s}},9602:function(e,t,a){var r=a(7294),n=a(4184),s=a.n(n),c=a(5893);t.Z=e=>r.forwardRef(((t,a)=>(0,c.jsx)("div",{...t,ref:a,className:s()(t.className,e)})))}}]);
//# sourceMappingURL=component---src-templates-projects-js-cb1fa6a8e209e284fc31.js.map