"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[4998],{3860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=n(5893),o=n(1151);const s={title:"Node Exporter",description:"A tool that collects your metrics at the host level",sidebar_position:2},i="Node Exporter",a={id:"sentinelguides/validator/monitoring/node-exporter",title:"Node Exporter",description:"A tool that collects your metrics at the host level",source:"@site/docs/sentinelguides/validator/monitoring/node-exporter.md",sourceDirName:"sentinelguides/validator/monitoring",slug:"/sentinelguides/validator/monitoring/node-exporter",permalink:"/docs/sentinelguides/validator/monitoring/node-exporter",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sentinelguides/validator/monitoring/node-exporter.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Node Exporter",description:"A tool that collects your metrics at the host level",sidebar_position:2},sidebar:"validatorSidebar",previous:{title:"Overview",permalink:"/docs/sentinelguides/validator/monitoring/overview"},next:{title:"Prometheus",permalink:"/docs/sentinelguides/validator/monitoring/prometheus"}},d={},l=[{value:"Download &amp; Installation",id:"download--installation",level:2},{value:"Add a system unit file",id:"add-a-system-unit-file",level:2},{value:"Start Node Exporter service",id:"start-node-exporter-service",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"node-exporter",children:"Node Exporter"}),"\n",(0,r.jsx)(t.p,{children:"Node Exporter is a monitoring application that must be installed on both your validator and monitoring machines"}),"\n",(0,r.jsx)(t.h2,{id:"download--installation",children:"Download & Installation"}),"\n",(0,r.jsxs)(t.p,{children:["On both your validator and monitoring machines, download and unpack Node Exporter (check the last version ",(0,r.jsx)(t.a,{href:"https://prometheus.io/download/#node_exporter",children:"here"}),")"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"wget https://github.com/prometheus/node_exporter/releases/download/v1.5.0/node_exporter-1.5.0.linux-amd64.tar.gz\ntar xvfz node_exporter-1.5.0.linux-amd64.tar.gz\n"})}),"\n",(0,r.jsx)(t.p,{children:"Rename the folder"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"mv node_exporter-1.5.0.linux-amd64 node_exporter\n"})}),"\n",(0,r.jsx)(t.h2,{id:"add-a-system-unit-file",children:"Add a system unit file"}),"\n",(0,r.jsx)(t.p,{children:"Open the .service with a text editor"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"sudo nano /etc/systemd/system/node-exporter.service\n"})}),"\n",(0,r.jsx)(t.p,{children:"Paste the below text"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:"title=/etc/systemd/system/node-exporter.service",children:"[Unit]\nDescription=Node Exporter\nAfter=network-online.target\n\u200b\n[Service]\nUser=youruser #modify this field with your user\nTimeoutStartSec=0\nCPUWeight=95\nIOWeight=95\nExecStart=/home/youruser/node_exporter/node_exporter\nRestart=always\nRestartSec=2\nLimitNOFILE=800000\nKillSignal=SIGTERM\n\u200b\n[Install]\nWantedBy=multi-user.target\n"})}),"\n",(0,r.jsx)(t.p,{children:"Reload the systemd Daemon"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"sudo systemctl daemon-reload\n"})}),"\n",(0,r.jsx)(t.p,{children:"Enable autostart of Node Exporter service"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"sudo systemctl enable node-exporter.service\n"})}),"\n",(0,r.jsx)(t.h2,{id:"start-node-exporter-service",children:"Start Node Exporter service"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"sudo systemctl start node-exporter.service\n"})}),"\n",(0,r.jsx)(t.p,{children:"Use this command to check logs in real time"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"sudo journalctl -u node-exporter.service -f\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Once the Node Exporter is installed and running, you can verify that ",(0,r.jsx)(t.code,{children:"metrics"})," are being exported by cURLing the /metrics endpoint:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl http://localhost:9100/metrics\n"})}),"\n",(0,r.jsx)(t.p,{children:"Success! Node Exporter is now exposing metrics that Prometheus can scrape, including a wide variety of system metrics further down in the output (prefixed with node_). To view those metrics (along with help and type information):"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'curl http://localhost:9100/metrics | grep "node_"\n'})}),"\n",(0,r.jsx)(t.p,{children:"After installing and running Node Exporter, you need to open port 9100 on your Validator firewall (accessible only from your monitor machine) to allow Prometheus to scrape data from Node Exporter."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"sudo ufw allow from monitor_ip to validator_ip port 9100\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var r=n(7294);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);