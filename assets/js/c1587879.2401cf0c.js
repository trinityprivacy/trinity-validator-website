"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[7565],{800:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var s=n(4848),r=n(8453);const o={title:"Prometheus",description:"A tool that collects your metrics from Node Exporter",sidebar_position:4},a="Prometheus",i={id:"monitoring/metrics/prometheus",title:"Prometheus",description:"A tool that collects your metrics from Node Exporter",source:"@site/docs/monitoring/metrics/prometheus.md",sourceDirName:"monitoring/metrics",slug:"/monitoring/metrics/prometheus",permalink:"/docs/monitoring/metrics/prometheus",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Prometheus",description:"A tool that collects your metrics from Node Exporter",sidebar_position:4},sidebar:"monitoringSidebar",previous:{title:"Alert Manager",permalink:"/docs/monitoring/metrics/alertmanager"},next:{title:"Promtail",permalink:"/docs/monitoring/logs/promtail"}},l={},c=[{value:"Download &amp; Installation",id:"download--installation",level:2},{value:"Configure Jobs in the Config File",id:"configure-jobs-in-the-config-file",level:2},{value:"Create the web authentication file",id:"create-the-web-authentication-file",level:2},{value:"Create the gen-pass file",id:"create-the-gen-pass-file",level:3},{value:"Create the file web.yml",id:"create-the-file-webyml",level:3},{value:"Add a system unit file",id:"add-a-system-unit-file",level:2},{value:"Start Prometheus service",id:"start-prometheus-service",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"prometheus",children:"Prometheus"}),"\n",(0,s.jsx)(t.p,{children:"Prometheus is a monitoring application that must be installed on a separate monitoring machine"}),"\n",(0,s.jsx)(t.h2,{id:"download--installation",children:"Download & Installation"}),"\n",(0,s.jsxs)(t.p,{children:["To get started, begin by downloading the most recent ",(0,s.jsx)(t.a,{href:"https://github.com/prometheus/prometheus/releases",children:"release"}),". Once the download is complete, proceed to unzip the file, and you'll be all set to proceed."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"wget https://github.com/prometheus/prometheus/releases/download/vX.X.X/prometheus-X.X.X.linux-amd64.tar.gz\ntar xvfz prometheus-X.X.X.linux-amd64.tar.gz\nsudo rm -f prometheus-X.X.X.linux-amd64.tar.gz\nmv prometheus-X.X.X.linux-amd64/ prometheus/\ncd prometheus/\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Add a symbolic link to the ",(0,s.jsx)(t.code,{children:"/usr/local/bin/"})," directory for system-wide access to Prometheus:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"sudo ln -s /home/${USER}/prometheus/prometheus /usr/local/bin/\n"})}),"\n",(0,s.jsx)(t.h2,{id:"configure-jobs-in-the-config-file",children:"Configure Jobs in the Config File"}),"\n",(0,s.jsxs)(t.p,{children:["Inside your ",(0,s.jsx)(t.code,{children:"prometheus"})," directory open the ",(0,s.jsx)(t.code,{children:"prometheus.yml"})," file:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"sudo nano prometheus.yml\n"})}),"\n",(0,s.jsx)(t.p,{children:"Ensure that both your Validator machine and local machine are included in the list of scrape targets in the configuration file. This step enables Prometheus to collect metrics from these sources. I have added all the exported outlined in this guide"}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"prometheus.yml"}),(0,s.jsx)("p",{children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'scrape_configs:\n  # Monitoring Node with prometheus installed\n  - job_name: "monitor-hardware-metrics"\n\u200b\n    # current machine ip and port\n    static_configs:\n      - targets: ["localhost:9100"]\n\u200b\n  # Validator Host Hardware Metrics\n  - job_name: "validator-hardware-metrics"\n\u200b\n    # validator ip and port\n    static_configs:\n      - targets: ["validator_ip:9100"]\n\u200b\n # Validator Internal Metrics\n  - job_name: "validator-internal-metrics"\n\u200b\n    # validator ip and port\n    static_configs:\n      - targets: ["validator_ip:26660"]\n  \n # Cosmos Validator Exporter\n  - job_name: "cosmos-validator-exporter"\n\n    # validator ip and port\n    static_configs:\n      - targets: ["<your_validator_ip>:9560"]\n\n  # Cosmos Node Exporter\n  - job_name: "cosmos-node-exporter"\n    \n    # validator ip and port\n    static_configs:\n      - targets: ["<your_validator_ip>:9500"]\n\n  \n'})})})]}),"\n",(0,s.jsxs)(t.p,{children:["Additionally, when installing any additional exporter, don't forget to update the ",(0,s.jsx)(t.code,{children:"prometheus.yml"})," file by adding the corresponding job configuration."]}),"\n",(0,s.jsx)(t.h2,{id:"create-the-web-authentication-file",children:"Create the web authentication file"}),"\n",(0,s.jsx)(t.p,{children:"First we need to have bcrypt tools installed (can be on any device) to generate a hash of your login password."}),"\n",(0,s.jsx)(t.h3,{id:"create-the-gen-pass-file",children:"Create the gen-pass file"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"sudo nano gen-pass.py\n"})}),"\n",(0,s.jsx)(t.p,{children:"Paste the following text"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",metastring:'title="gen-pass.py"',children:'import getpass\nimport bcrypt\n\u200b\npassword = getpass.getpass("password: ")\nhashed_password = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())\nprint(hashed_password.decode())\n'})}),"\n",(0,s.jsx)(t.p,{children:"Save the file and execute the pythin script"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"python3 gen-pass.py\n"})}),"\n",(0,s.jsx)(t.p,{children:"You will be prompted for a password. Please enter it, and you will be provided with the encrypted password that you need to copy. Please see the example below"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"password: test\n$2a$12$1VqNbIcQya1KjObYiDvFz.024poXtE1S9gQfs0fD8uATCeOv6/PgK\n"})}),"\n",(0,s.jsx)(t.h3,{id:"create-the-file-webyml",children:"Create the file web.yml"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"sudo nano /home/user/prometheus/web.yml\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Add your authentication to access Prometheus metrics. Replace ",(0,s.jsx)(t.code,{children:"<password>"})," with the encrypted password you got from your ",(0,s.jsx)(t.code,{children:"gen-pass.py"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",metastring:'title="/home/user/prometheus/web.yml"',children:"basic_auth_users:\n    admin: <password>\n"})}),"\n",(0,s.jsx)(t.p,{children:"(optional) You can now validate the file web.yml with this command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"promtool check web-config web.yml\n"})}),"\n",(0,s.jsx)(t.p,{children:"You should get the following output:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"web.yml SUCCESS\n"})}),"\n",(0,s.jsx)(t.h2,{id:"add-a-system-unit-file",children:"Add a system unit file"}),"\n",(0,s.jsx)(t.p,{children:"Open the .service with a text editor"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"sudo nano /etc/systemd/system/prometheus.service\n"})}),"\n",(0,s.jsx)(t.p,{children:"Paste the below text"}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"prometheus.service"}),(0,s.jsx)("p",{children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:'title="/etc/systemd/system/prometheus.service"',children:"[Unit]\nDescription=Preometheus\nAfter=network-online.target\n\u200b\n[Service]\nUser=<your_user> #modify this field with your user\nTimeoutStartSec=0\nCPUWeight=95\nIOWeight=95\nExecStart=prometheus --config.file=/home/<your_user>/prometheus/prometheus.yml --web.config.file=/home/<your_user>/prometheus/web.yml --storage.tsdb.path=/home/<your_user>/prometheus/data\nRestart=always\nRestartSec=2\nLimitNOFILE=800000\nKillSignal=SIGTERM\n\u200b\n[Install]\nWantedBy=multi-user.target\n"})})})]}),"\n",(0,s.jsx)(t.p,{children:"Reload the systemd Daemon"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"sudo systemctl daemon-reload\n"})}),"\n",(0,s.jsx)(t.p,{children:"Enable autostart of Node Exporter service"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"sudo systemctl enable prometheus.service\n"})}),"\n",(0,s.jsx)(t.h2,{id:"start-prometheus-service",children:"Start Prometheus service"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"sudo systemctl start prometheus.service\n"})}),"\n",(0,s.jsx)(t.p,{children:"Use this command to check logs in real time"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"sudo journalctl -u prometheus.service -f --output cat\n"})}),"\n",(0,s.jsx)(t.p,{children:"After installing and running Prometheus, you can verify whether metrics are being exported from Node Exporter to Prometheus by using cURL to request the /metrics endpoint on Prometheus port 9090 (you need to insert the password created before)"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -u admin http://localhost:9090/metrics\n"})}),"\n",(0,s.jsx)(t.p,{children:"If you are running Prometheus on a VPS and want to access the web UI via an external browser, you need to first enable port 9090 on ufw"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"sudo ufw allow 9090/tcp\n"})}),"\n",(0,s.jsx)(t.p,{children:"You can now enter this address in your browser to check if Prometheus displays them."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"https://prometheus_ip:9090/graph\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var s=n(6540);const r={},o=s.createContext(r);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);