"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[6536],{8375:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var s=r(4848),t=r(8453);const a={title:"NGINX",description:"A popular open-source web server software and reverse proxy server",sidebar_position:4},o="NGINX",i={id:"validator/rpc/nginx",title:"NGINX",description:"A popular open-source web server software and reverse proxy server",source:"@site/docs/validator/rpc/nginx.md",sourceDirName:"validator/rpc",slug:"/validator/rpc/nginx",permalink:"/docs/validator/rpc/nginx",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"NGINX",description:"A popular open-source web server software and reverse proxy server",sidebar_position:4},sidebar:"validatorSidebar",previous:{title:"Certbot",permalink:"/docs/validator/rpc/certbot"},next:{title:"Add RPC to Chain Registry",permalink:"/docs/validator/rpc/chain-registry"}},c={},l=[{value:"Installation",id:"installation",level:2},{value:"Launch test",id:"launch-test",level:2},{value:"Configuration",id:"configuration",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"nginx",children:"NGINX"}),"\n",(0,s.jsx)(n.p,{children:'NGINX (pronounced "engine-x") is a high-performance, open-source web server and reverse proxy server. It\'s known for its efficient handling of web traffic and its ability to serve as a load balancer. NGINX is widely used to improve website performance, security, and scalability. It can also function as a proxy server for applications and offers features like SSL/TLS termination, caching, and content delivery. NGINX is popular for its speed and reliability in serving web content.'}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.p,{children:"Install the dependencies:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt update\nsudo apt install curl gnupg2 ca-certificates lsb-release\n"})}),"\n",(0,s.jsx)(n.p,{children:"Import an official Nginx signing key:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor \\\n    | sudo tee /usr/share/keyrings/nginx-archive-keyring.gpg > /dev/null\n"})}),"\n",(0,s.jsx)(n.p,{children:"Ensure that the downloaded file contains the correct key"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"gpg --dry-run --quiet --import --import-options import-show /usr/share/keyrings/nginx-archive-keyring.gpg\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now, proceed to set up the APT repository for stable Nginx packages:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] \\\nhttp://nginx.org/packages/debian `lsb_release -cs` nginx" \\\n    | sudo tee /etc/apt/sources.list.d/nginx.list\n'})}),"\n",(0,s.jsx)(n.p,{children:"Install NGINX:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt install nginx\n"})}),"\n",(0,s.jsx)(n.h2,{id:"launch-test",children:"Launch test"}),"\n",(0,s.jsx)(n.p,{children:"After installation check the NGINX status (it will probably be enabled but inactive):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo systemctl status nginx\n"})}),"\n",(0,s.jsx)(n.p,{children:"Start the service:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo systemctl start nginx.service\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To test the setup, open your browser and enter ",(0,s.jsx)(n.code,{children:"localhost"})," in the URL bar, or type it in your terminal"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl localhost\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you receive a successful message, you can now stop NGINX"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo systemctl stop nginx.service\n"})}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.p,{children:"Navigate to the configuration directory:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd /etc/nginx/conf.d\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You may find the file ",(0,s.jsx)(n.code,{children:"default.conf"}),". You can rename it or create the files ",(0,s.jsx)(n.code,{children:"rpc.conf"})," and ",(0,s.jsx)(n.code,{children:"api.conf"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo mv default.conf rpc.conf\nsudo nano rpc.conf\nsudo nano api.conf\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Copy the following template into the ",(0,s.jsx)(n.code,{children:"rpc.conf"})," and replace myvalidator with your domain"]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"rpc.conf"}),(0,s.jsx)("p",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"server {\n    server_name rpc.sentinel.myvalidator.com;\n\n    location / {\n        proxy_pass http://127.0.0.1:26657;\n        proxy_set_header Host $host;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection $http_connection;\n    }\n\n    listen [::]:80;\n    listen 80;\n}\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Copy the following template into the ",(0,s.jsx)(n.code,{children:"api.conf"})," and replace myvalidator with your domain"]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"api.conf"}),(0,s.jsx)("p",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"server {\n    server_name api.sentinel.myvalidator.com;\n\n    location / {\n        proxy_pass http://127.0.0.1:1317;\n        proxy_set_header Host $host;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_http_version 1.1;\n    }\n\n    listen [::]:80;\n    listen 80;\n}\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"Now, install the Certbot plugin"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt install python3-certbot-nginx\n"})}),"\n",(0,s.jsx)(n.p,{children:"Apply Certbot plugin to the rpc.conf file to enable redirection to HTTPS and select the number corresponding to your Full Node"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo certbot --nginx\n"})}),"\n",(0,s.jsx)(n.p,{children:"Restart NGINX"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo systemctl restart nginx\n"})}),"\n",(0,s.jsx)(n.p,{children:"If anyhing goes wrong, run this command to check the logs:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo tail -n 50 /var/log/nginx/error.log\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you encounter no errors, you can finally test whether your RPC is now public:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"https://rpc.sentinel.myvalidator.com\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>i});var s=r(6540);const t={},a=s.createContext(t);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);