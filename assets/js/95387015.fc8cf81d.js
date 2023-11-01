"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[2909],{1253:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=s(5893),r=s(1151);const i={title:"SSH",description:"Setting up SSH for secure remote access and communication",sidebar_position:3},o=void 0,a={id:"sentinelguides/validator/server-setup/ssh",title:"SSH",description:"Setting up SSH for secure remote access and communication",source:"@site/docs/sentinelguides/validator/server-setup/ssh.md",sourceDirName:"sentinelguides/validator/server-setup",slug:"/sentinelguides/validator/server-setup/ssh",permalink:"/docs/sentinelguides/validator/server-setup/ssh",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sentinelguides/validator/server-setup/ssh.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"SSH",description:"Setting up SSH for secure remote access and communication",sidebar_position:3},sidebar:"validatorSidebar",previous:{title:"Create New User",permalink:"/docs/sentinelguides/validator/server-setup/create-user"},next:{title:"Install Golang",permalink:"/docs/sentinelguides/validator/golang"}},c={},d=[];function l(e){const n={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"You will need to connect to your server via SSH. Assuming it is already installed, the ideal thing to do for security purposes is to change the default port 22 to another one; let's say 2222"}),"\n",(0,t.jsx)(n.p,{children:"The first thing to do is to check if the port is not already being used by another service"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"grep 2222 /etc/services\n"})}),"\n",(0,t.jsx)(n.p,{children:"If the port is not already being used by another service, you can add it to your firewall"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo ufw allow 2222/tcp\n"})}),"\n",(0,t.jsx)(n.p,{children:"Enable the firewall"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo ufw enable\n"})}),"\n",(0,t.jsx)(n.p,{children:"Check firewall status to see if the port has been enabled"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo ufw status\n"})}),"\n",(0,t.jsx)(n.p,{children:"Open the SSH config file"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo nano /etc/ssh/sshd_config\n"})}),"\n",(0,t.jsx)(n.p,{children:"Set the following fields"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:"title=/etc/ssh/sshd_config",children:"# For security purposes we want to use a port number which is not the default one 22\nPort 2222\n\n# Better disable root login via SSH. If needed better to switch to root once\n# connected with a normal user\nPermitRootLogin  no\n\n# Authentication with public key is preferred\nPubkeyAuthentication  yes\n\n# Better not to use password authentication\nPasswordAuthentication  no\n"})}),"\n",(0,t.jsx)(n.p,{children:"Restart the service"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo service sshd restart\n"})}),"\n",(0,t.jsx)(n.p,{children:"Connect to your machine via SSH using the new port"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ssh sentinel@machine_ip -p 2222\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var t=s(7294);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);