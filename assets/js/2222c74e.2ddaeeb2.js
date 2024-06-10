"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[2084],{254:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var o=t(4848),s=t(8453);const i={title:"Deploy the Node",description:"The steps to deploy your node",sidebar_position:2},d="Deploy the Node",r={id:"node/other/cloudmos-on-akash/deploy",title:"Deploy the Node",description:"The steps to deploy your node",source:"@site/docs/node/other/cloudmos-on-akash/deploy.md",sourceDirName:"node/other/cloudmos-on-akash",slug:"/node/other/cloudmos-on-akash/deploy",permalink:"/docs/node/other/cloudmos-on-akash/deploy",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Deploy the Node",description:"The steps to deploy your node",sidebar_position:2},sidebar:"nodeSidebar",previous:{title:"Overview & Requirements",permalink:"/docs/node/other/cloudmos-on-akash/start-cloudmos-on-akash"},next:{title:"SSH into the Container",permalink:"/docs/node/other/cloudmos-on-akash/ssh"}},a={},p=[];function c(e){const n={a:"a",code:"code",h1:"h1",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"deploy-the-node",children:"Deploy the Node"}),"\n",(0,o.jsxs)(n.p,{children:["Navigate to ",(0,o.jsx)(n.a,{href:"https://deploy.cloudmos.io/",children:"https://deploy.cloudmos.io/"})]}),"\n",(0,o.jsxs)(n.p,{children:["On the top-left click on ",(0,o.jsx)(n.code,{children:"DEPLOY"})]}),"\n",(0,o.jsxs)(n.p,{children:["Select ",(0,o.jsx)(n.code,{children:"Empty"})," template"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Empty Template",src:t(720).A+"",width:"1192",height:"231"})}),"\n",(0,o.jsx)(n.p,{children:"Insert the provided content, ensuring that you edit the necessary fields and that your input is enclosed within double quotes"}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)("summary",{children:"Template"}),(0,o.jsx)("p",{children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'---\nversion: "2.0"\nendpoints:\n  unique_name_endpoint: # it must be a unique name\n    kind: ip\nservices:\n  app:\n    image: declab/sentinel_dvpn:0.7.1.1\n    \n    env:\n      - "MNEMONIC_BASE64=" # Mnemonic encrypted with BASE64.\n      - "MONIKER=" # Your dVPN node name.\n      - "REMOTE_PORT=8585" # TCP listen port.\n      - "LISTEN_PORT=3333" # V2RAY listen port\n      - "IPV4_ADDRESS=" # Node leased IP address (you will add it later)\n      - "RPC_ADDRESS=https://rpc.sentinel.co:443"\n      - "GIGABYTE_PRICES=52573ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,9204ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477,1180852ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783,122740ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,15342624udvpn"\n      - "HOURLY_PRICES=18480ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,770ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477,1871892ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783,18897ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,4160000udvpn"\n        \n    expose:\n      - port: 8585 # TCP Listen Port\n        to:\n          - global: true\n            ip: uniq_name_endpoint  # Name from string 3, for example "ip: dvpn_dimokus"\n      - port: 3333 # V2RAY Port\n        to:\n          - global: true\n            ip: uniq_name_endpoint  # Name from string 3, for example "ip: dvpn_dimokus"    \nprofiles:\n  compute:\n    app:\n      resources:\n        cpu:\n          units: 1\n        memory:\n          size: 1Gi\n        storage:\n          size: 3Gi         \n  placement:\n    akash: \n      pricing:\n        app:\n          denom: uakt\n          amount: 100000\ndeployment:\n  app:\n    akash:\n      profile: app\n      count: 1 \n'})})})]}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)("summary",{children:"Template with SSH Access"}),(0,o.jsx)("p",{children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'---\nversion: "2.0"\nendpoints:\n  unique_name_endpoint: # it must be a unique name\n    kind: ip\nservices:\n  app:\n    image: declab/sentinel_dvpn_ssh:0.7.3\n    \n    env:\n      - "SSH_PASS=" # Your SSH password\n      - "MNEMONIC_BASE64=" # Mnemonic encrypted with BASE64.\n      - "MONIKER=" # Your dVPN node name.\n      - "REMOTE_PORT=8585" # TCP listen port.\n      - "LISTEN_PORT=3333" # V2RAY listen port\n      - "IPV4_ADDRESS=" # Node leased IP address (you will add it later)\n      - "RPC_ADDRESS=https://rpc.sentinel.co:443"\n      - "GIGABYTE_PRICES=52573ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,9204ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477,1180852ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783,122740ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,15342624udvpn"\n      - "HOURLY_PRICES=18480ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,770ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477,1871892ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783,18897ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,4160000udvpn"\n        \n    expose:\n      - port: 8585 # TCP listen port\n        to:\n          - global: true\n            ip: unique_name_endpoint  # Name used in line 3, for example "ip: dvpn_akash_node"\n      - port: 3333 # V2RAY port\n        to:\n          - global: true\n            ip: unique_name_endpoint  # Name used in line 3, for example "ip: dvpn_akash_node"\n      - port: 22 # SSH port\n        to:\n          - global: true\nprofiles:\n  compute:\n    app:\n      resources:\n        cpu:\n          units: 1\n        memory:\n          size: 1Gi\n        storage:\n          size: 3Gi         \n  placement:\n    akash: \n      pricing:\n        app:\n          denom: uakt\n          amount: 100000\ndeployment:\n  app:\n    akash:\n      profile: app\n      count: 1\n'})})})]}),"\n",(0,o.jsxs)(n.p,{children:["Click on ",(0,o.jsx)(n.code,{children:"CREATE DEPLOYMENT"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Create Deployment",src:t(3464).A+"",width:"1166",height:"510"})}),"\n",(0,o.jsxs)(n.p,{children:["You will need to make a ",(0,o.jsx)(n.strong,{children:"5 AKT"})," deployment deposit, which will be refunded to you upon closing the deployment."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Deposit",src:t(3494).A+"",width:"446",height:"359"})}),"\n",(0,o.jsxs)(n.p,{children:["Now, wait for bids, select your preferred provider and click on ",(0,o.jsx)(n.code,{children:"ACCEPT BID"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Bids",src:t(8742).A+"",width:"1185",height:"326"})}),"\n",(0,o.jsxs)(n.p,{children:["Wait for deployment and check the tab EVENTS to see the ",(0,o.jsx)(n.strong,{children:"IP"})," that has been ",(0,o.jsx)(n.strong,{children:"assigned!"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Assigned IP",src:t(7002).A+"",width:"982",height:"489"})}),"\n",(0,o.jsxs)(n.p,{children:["Now go on tab ",(0,o.jsx)(n.code,{children:"UPDATE"}),", insert your IP into the field ",(0,o.jsx)(n.code,{children:"IPV4_ADDRESS"})," and click on ",(0,o.jsx)(n.code,{children:"UPDATE DEPLOYMENT"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Update Deployment",src:t(6973).A+"",width:"1163",height:"497"})}),"\n",(0,o.jsx)(n.p,{children:"The node will be redeployed. You can check the LOGS tab as you normally do when installing it manually to verify if it goes online without errors. Alternatively, you can SSH into the container, which is the next step."})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},7002:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/assigned-ip-d318b9a2cb281fa048dc3761796b5946.png"},8742:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/bids-09478cb228e97a8340821ef416d6c2f6.png"},3464:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/create-deployment-d009674d87d70fb931b301224e8c356e.png"},3494:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/deposit-c485f1443572d989a9df9e04e4bd5f56.png"},720:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/template-72f518247ffd8efe313aa6e84f2c3cf8.png"},6973:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/update-f331489b2162f285c3ee657f269d8abe.png"},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>r});var o=t(6540);const s={},i=o.createContext(s);function d(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);