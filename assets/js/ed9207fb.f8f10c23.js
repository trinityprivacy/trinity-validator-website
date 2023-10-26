"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[4869],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),g=r,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||l;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={title:"Install Golang",description:"Needed for interacting with and utilizing Sentinel Hub services",sidebar_position:3},o="Install Golang",i={unversionedId:"sentinelguides/validator/golang",id:"sentinelguides/validator/golang",title:"Install Golang",description:"Needed for interacting with and utilizing Sentinel Hub services",source:"@site/docs/sentinelguides/validator/golang.md",sourceDirName:"sentinelguides/validator",slug:"/sentinelguides/validator/golang",permalink:"/docs/sentinelguides/validator/golang",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sentinelguides/validator/golang.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Install Golang",description:"Needed for interacting with and utilizing Sentinel Hub services",sidebar_position:3},sidebar:"sentinelSidebar",previous:{title:"SSH",permalink:"/docs/sentinelguides/validator/server-setup/ssh"},next:{title:"Install and Configure Full Node",permalink:"/docs/sentinelguides/validator/node-setup"}},s={},u=[{value:"Debian Based Distributions",id:"debian-based-distributions",level:2},{value:"Manually",id:"manually",level:2},{value:"Export Golang environment variables",id:"export-golang-environment-variables",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"install-golang"},"Install Golang"),(0,r.kt)("p",null,"First of all install some required packages"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install -y curl git jq make unzip\n")),(0,r.kt)("p",null,"You now have two methods for installing Golang."),(0,r.kt)("h2",{id:"debian-based-distributions"},"Debian Based Distributions"),(0,r.kt)("p",null,"To install Go on Debian and its derivatives, you can easily follow the steps provided."),(0,r.kt)("p",null,"Add the repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo add-apt-repository ppa:longsleep/golang-backports\n")),(0,r.kt)("p",null,"Install Golang"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install -y golang-go\n")),(0,r.kt)("h2",{id:"manually"},"Manually"),(0,r.kt)("p",null,"This method should work on all Linux systems, although it is intended for more experienced users."),(0,r.kt)("p",null,"Get a copy of the last Golang version and unpack it"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~ && \\\ncurl -OL https://golang.org/dl/go1.21.3.linux-amd64.tar.gz && \\\ntar -C ${HOME} -xvf go1.21.3.linux-amd64.tar.gz\n")),(0,r.kt)("p",null,"Move the extracted go into ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/lib/go")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mv ${HOME}/go /usr/local/lib/go\n")),(0,r.kt)("h2",{id:"export-golang-environment-variables"},"Export Golang environment variables"),(0,r.kt)("p",null,"Now that you've successfully installed Golang, it's essential to configure its environmental variables."),(0,r.kt)("p",null,"Open the .bashrc file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano ${HOME}/.bashrc\n")),(0,r.kt)("p",null,"Append the below lines to the file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=${HOME}/.bashrc",title:"${HOME}/.bashrc"},"export GOROOT=/usr/local/lib/go\nexport GOPATH=${HOME}/go\nexport GOBIN=${GOPATH}/bin\nexport PATH=${PATH}:${GOROOT}/bin:${GOBIN}\n")),(0,r.kt)("p",null,"Source the file to reflect in the current Terminal session"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"source ${HOME}/.bashrc\n")))}d.isMDXComponent=!0}}]);