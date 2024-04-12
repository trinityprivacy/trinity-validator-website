"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[253],{1430:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var o=n(4848),i=n(8453);const r={title:"Setup & Config",description:"The necessary steps to implement Cosmovisor",sidebar_position:2},t="Setup & Config",c={id:"validator/cosmovisor/setup-config",title:"Setup & Config",description:"The necessary steps to implement Cosmovisor",source:"@site/docs/validator/cosmovisor/setup-config.md",sourceDirName:"validator/cosmovisor",slug:"/validator/cosmovisor/setup-config",permalink:"/docs/validator/cosmovisor/setup-config",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Setup & Config",description:"The necessary steps to implement Cosmovisor",sidebar_position:2},sidebar:"validatorSidebar",previous:{title:"Overview",permalink:"/docs/validator/cosmovisor/overview"},next:{title:"Binary Upgrade",permalink:"/docs/validator/cosmovisor/upgrade"}},l={},a=[{value:"Installation",id:"installation",level:2},{value:"Environment Setup",id:"environment-setup",level:2},{value:"Set Up Cosmovisor Service",id:"set-up-cosmovisor-service",level:2},{value:"Start Cosmovisor Service",id:"start-cosmovisor-service",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Details:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"setup--config",children:"Setup & Config"}),"\n",(0,o.jsx)(s.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(s.p,{children:"To install Cosmovisor, use the following command:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"go install cosmossdk.io/tools/cosmovisor/cmd/cosmovisor@latest\n"})}),"\n",(0,o.jsxs)(s.p,{children:["This command will generate the Cosmovisor binary in the ",(0,o.jsx)(s.code,{children:"go/bin/"})," folder."]}),"\n",(0,o.jsxs)(s.p,{children:["Add a symbolic link to the ",(0,o.jsx)(s.code,{children:"/usr/local/bin/"})," directory for system-wide access to Cosmovisor:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"sudo ln -s /home/sentinel/go/bin/cosmovisor /usr/local/bin/\n"})}),"\n",(0,o.jsxs)(s.p,{children:["(You may also refer to the Cosmovisor ",(0,o.jsx)(s.a,{href:"https://github.com/cosmos/cosmos-sdk/tree/main/tools/cosmovisor#installation",children:"installation instructions"}),")"]}),"\n",(0,o.jsx)(s.h2,{id:"environment-setup",children:"Environment Setup"}),"\n",(0,o.jsxs)(s.p,{children:["Create the required directories inside your ",(0,o.jsx)(s.code,{children:"~/.sentinelhub"})," folder:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"mkdir -p ~/.sentinelhub/cosmovisor\nmkdir -p ~/.sentinelhub/cosmovisor/genesis\nmkdir -p ~/.sentinelhub/cosmovisor/genesis/bin\nmkdir -p ~/.sentinelhub/cosmovisor/upgrades\n"})}),"\n",(0,o.jsxs)(s.p,{children:["Configure the environment variables according to your shell type, which may involve editing either ",(0,o.jsx)(s.code,{children:"~/.profile"})," or ",(0,o.jsx)(s.code,{children:"~/.bashrc"}),":"]}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"Environmental Variables"}),(0,o.jsx)("p",{children:(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:'echo "# Cosmovisor Environmental Variables" >> ~/.bashrc\necho "export DAEMON_NAME=sentinelhub" >> ~/.bashrc\necho "export DAEMON_HOME=$HOME/.sentinelhub" >> ~/.bashrc\necho "export DAEMON_ALLOW_DOWNLOAD_BINARIES=false" >> ~/.bashrc\necho "export DAEMON_LOG_BUFFER_SIZE=512" >> ~/.bashrc\necho "export DAEMON_RESTART_AFTER_UPGRADE=true" >> ~/.bashrc\necho "export UNSAFE_SKIP_BACKUP=true" >> ~/.bashrc\n\nsource ~/.bashrc\n'})})})]}),"\n",(0,o.jsxs)(s.p,{children:["You may leave out ",(0,o.jsx)(s.code,{children:"UNSAFE_SKIP_BACKUP=true"}),", however the backup takes a decent amount of time and public snapshots of old states are available."]}),"\n",(0,o.jsxs)(s.p,{children:["Copy the current ",(0,o.jsx)(s.code,{children:"sentinelhub"})," binary into the ",(0,o.jsx)(s.code,{children:"cosmovisor/genesis"})," folder:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"cp $GOPATH/bin/sentinelhub ~/.sentinelhub/cosmovisor/genesis/bin\n"})}),"\n",(0,o.jsx)(s.p,{children:"Now check the cosmovisor version"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"cosmovisor version\n"})}),"\n",(0,o.jsx)(s.p,{children:"You will get something like that:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:'cosmovisor version: v1.5.0\n11:03AM INF running app args=["version"] module=cosmovisor path=/home/sentinel/.sentinelhub/cosmovisor/genesis/bin/sentinelhub\n0.11.3\n'})}),"\n",(0,o.jsx)(s.p,{children:"To check your work, check sentinelhub version to confirm it matches with cosmovisor version"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"sentinelhub version\n"})}),"\n",(0,o.jsxs)(s.p,{children:["If you get ",(0,o.jsx)(s.code,{children:"0.11.3"})," (which is the current version at the time of writing) everything went fine"]}),"\n",(0,o.jsx)(s.h2,{id:"set-up-cosmovisor-service",children:"Set Up Cosmovisor Service"}),"\n",(0,o.jsx)(s.p,{children:"Set up a service to allow Cosmovisor to run in the background as well as restart automatically if it runs into any problems:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"sudo nano cosmovisor.service\n"})}),"\n",(0,o.jsx)(s.p,{children:"Add the following block"}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"cosmovisor.service"}),(0,o.jsx)("p",{children:(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",metastring:'title="/etc/systemd/system/cosmovisor.service"',children:'[Unit]\nDescription=Cosmovisor Daemon\nAfter=network-online.target\n\n[Service]\nEnvironment="DAEMON_NAME=sentinelhub"\nEnvironment="DAEMON_HOME=/home/your-user/.sentinelhub"\nEnvironment="DAEMON_RESTART_AFTER_UPGRADE=true"\nEnvironment="DAEMON_ALLOW_DOWNLOAD_BINARIES=false"\nEnvironment="DAEMON_LOG_BUFFER_SIZE=512"\nEnvironment="UNSAFE_SKIP_BACKUP=true"\nUser=your-user\nExecStart=cosmovisor run start\nRestart=always\nRestartSec=3\nLimitNOFILE=infinity\nLimitNPROC=infinity\n\n[Install]\nWantedBy=multi-user.target\n'})})})]}),"\n",(0,o.jsx)(s.h2,{id:"start-cosmovisor-service",children:"Start Cosmovisor Service"}),"\n",(0,o.jsxs)(s.p,{children:["Reload the daemon, stop ",(0,o.jsx)(s.code,{children:"sentinelhub.service"}),", enable and start ",(0,o.jsx)(s.code,{children:"cosmovisor.service"}),":"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"sudo systemctl daemon-reload\nsudo systemctl enable cosmovisor.service\nsudo systemctl stop sentinelhub.service\nsudo systemctl start cosmovisor.service\n"})}),"\n",(0,o.jsx)(s.p,{children:"Check the status of the service:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"sudo systemctl status cosmovisor.service\n"})}),"\n",(0,o.jsx)(s.p,{children:"To see live logs of the service:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"journalctl -u cosmovisor.service -f --output=cat\n"})}),"\n",(0,o.jsxs)(s.p,{children:["If everything went fine you can either disable or remove ",(0,o.jsx)(s.code,{children:"sentinelhub.service"})," as you do not need it anymore"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"sudo systemctl disable sentinelhub.service\nsudo rm -f sentinelhub.service\n"})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>c});var o=n(6540);const i={},r=o.createContext(i);function t(e){const s=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(r.Provider,{value:s},e.children)}}}]);