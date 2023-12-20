"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[7658],{8736:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=a(5893),s=a(1151);const i={title:"Grafana",description:"A tool used for visualizing and analyzing metrics",sidebar_position:4},t="Grafana",o={id:"sentinelguides/monitoring/grafana",title:"Grafana",description:"A tool used for visualizing and analyzing metrics",source:"@site/docs/sentinelguides/monitoring/grafana.md",sourceDirName:"sentinelguides/monitoring",slug:"/sentinelguides/monitoring/grafana",permalink:"/docs/sentinelguides/monitoring/grafana",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Grafana",description:"A tool used for visualizing and analyzing metrics",sidebar_position:4},sidebar:"monitoringSidebar",previous:{title:"Prometheus",permalink:"/docs/sentinelguides/monitoring/prometheus"},next:{title:"Uptime Kuma",permalink:"/docs/sentinelguides/monitoring/uptime-kuma"}},l={},d=[{value:"Download &amp; Installation",id:"download--installation",level:2},{value:"Add a system unit file",id:"add-a-system-unit-file",level:2},{value:"Start Grafana service",id:"start-grafana-service",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Details:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"grafana",children:"Grafana"}),"\n",(0,r.jsx)(n.p,{children:"Grafana is an open-source analytics and monitoring platform that integrates with various data sources, allowing users to visualize and analyze metrics and logs. It provides a flexible and powerful interface for creating, exploring, and sharing dashboards, which are collections of panels that display visualizations of data."}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Grafana should not be installed on either a validator node or a monitoring machine. It is recommended to deploy Grafana on a separate dedicated machine or consider using a cloud-based solution."})}),"\n",(0,r.jsx)(n.h2,{id:"download--installation",children:"Download & Installation"}),"\n",(0,r.jsxs)(n.p,{children:["On your monitoring machine, download and unpack Grafana (check the last version ",(0,r.jsx)(n.a,{href:"https://grafana.com/grafana/download?platform=linux",children:"here"}),")"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"wget https://dl.grafana.com/enterprise/release/grafana-enterprise-10.2.3.linux-amd64.tar.gz\ntar -zxvf grafana-enterprise-10.2.3.linux-amd64.tar.gz\nsudo rm -f grafana-enterprise-10.2.3.linux-amd64.tar.gz\nmv grafana-v10.2.3/ grafana/\ncd grafana/\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Add a symbolic link to the ",(0,r.jsx)(n.code,{children:"/usr/local/bin/"})," directory for system-wide access to Prometheus:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo ln -s /home/<your_user>/grafana/bin/grafana-server /usr/local/bin/\n"})}),"\n",(0,r.jsx)(n.h2,{id:"add-a-system-unit-file",children:"Add a system unit file"}),"\n",(0,r.jsx)(n.p,{children:"Open the .service with a text editor"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo nano /etc/systemd/system/grafana.service\n"})}),"\n",(0,r.jsx)(n.p,{children:"Paste the below text"}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsx)("summary",{children:"grafana.service"}),(0,r.jsx)("p",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="/etc/systemd/system/grafana.service"',children:"[Unit]\nDescription=Grafana\nAfter=network-online.target\n\n[Service]\nUser=<your_user> #modify this field with your user\nTimeoutStartSec=0\nCPUWeight=95\nIOWeight=95\nWorkingDirectory=/home/<your_user>/grafana\nExecStart=grafana-server web --config.file=/home/<your_user>/grafana/conf/defaults.ini\nRestart=always\nRestartSec=2\nLimitNOFILE=800000\nKillSignal=SIGTERM\n\n[Install]\nWantedBy=multi-user.target\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"Reload the systemd Daemon"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo systemctl daemon-reload\n"})}),"\n",(0,r.jsx)(n.p,{children:"Enable autostart of Grafana service"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo systemctl enable grafana.service\n"})}),"\n",(0,r.jsx)(n.h2,{id:"start-grafana-service",children:"Start Grafana service"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo systemctl start grafana.service\n"})}),"\n",(0,r.jsx)(n.p,{children:"Use this command to check logs in real time"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo journalctl -u grafana.service -f\n"})}),"\n",(0,r.jsx)(n.p,{children:"If you are running Grafana on a VPS and want to access the web UI via an external browser, you need to first enable port 3000 on ufw:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo ufw allow 3000/tcp\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can now type this address into your browser"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"https://grafana_ip:3000\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>t});var r=a(7294);const s={},i=r.createContext(s);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);