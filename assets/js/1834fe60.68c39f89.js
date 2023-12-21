"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[4306],{4745:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var t=s(5893),a=s(1151);const i={title:"Run the Full Node",description:"How to run the hub and perform state sync",sidebar_position:5},o="Run the Full Node",r={id:"sentinelguides/validator/node-run",title:"Run the Full Node",description:"How to run the hub and perform state sync",source:"@site/docs/sentinelguides/validator/node-run.md",sourceDirName:"sentinelguides/validator",slug:"/sentinelguides/validator/node-run",permalink:"/docs/sentinelguides/validator/node-run",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Run the Full Node",description:"How to run the hub and perform state sync",sidebar_position:5},sidebar:"validatorSidebar",previous:{title:"Install and Configure Full Node",permalink:"/docs/sentinelguides/validator/node-setup"},next:{title:"Become a Validator",permalink:"/docs/sentinelguides/validator/validator-tx"}},l={},c=[{value:"State Sync",id:"state-sync",level:2},{value:"Bootstrap The Node",id:"bootstrap-the-node",level:3},{value:"Free up space",id:"free-up-space",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"run-the-full-node",children:"Run the Full Node"}),"\n",(0,t.jsxs)(n.p,{children:["When setting up a validator and joining a blockchain network, there are typically two main states that a node needs to synchronize with the network: Block Sync and State Sync. In this guide we will cover ",(0,t.jsx)(n.code,{children:"State Sync"}),", which is the preferable approach."]}),"\n",(0,t.jsx)(n.h2,{id:"state-sync",children:"State Sync"}),"\n",(0,t.jsx)(n.p,{children:"State Sync is the process of downloading the current state of the blockchain. When a validator joins a network, it needs to download the current state of the blockchain in order to validate new blocks. The current state includes all account balances, contract code, and contract storage. State sync is a more efficient way to get up to speed with the current state of the network, as it only downloads the necessary information rather than downloading the entire blockchain."}),"\n",(0,t.jsx)(n.p,{children:"State Sync is used to perform the following tasks that we will see in detail:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Bootstrap a node"}),"\n",(0,t.jsx)(n.li,{children:"Free up space on your hard disk"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"bootstrap-the-node",children:"Bootstrap The Node"}),"\n",(0,t.jsx)(n.p,{children:"To bootstrap your node with state sync, follow the steps below."}),"\n",(0,t.jsxs)(n.p,{children:["Create the file ",(0,t.jsx)(n.code,{children:"state-sync.sh"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo nano state-sync.sh\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Add the following code in it (to add your own or favourite RPC check this list ",(0,t.jsx)(n.a,{href:"https://cosmos.directory/sentinel/nodes",children:"here"}),"):"]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"state-sync.sh"}),(0,t.jsx)("p",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\nSNAP_RPC="https://rpc.sentinel.co:443"\nSNAP_RPC2="https://rpc-sentinel.whispernode.com:443"\n\nLATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height); \\\nBLOCK_HEIGHT=$((LATEST_HEIGHT - 1000)); \\\nTRUST_HASH=$(curl -s "$SNAP_RPC/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)\n\nsed -i.bak -E "s|^(enable[[:space:]]+=[[:space:]]+).*$|\\1true| ; \\\ns|^(rpc_servers[[:space:]]+=[[:space:]]+).*$|\\1\\"$SNAP_RPC,$SNAP_RPC2\\"| ; \\\ns|^(trust_height[[:space:]]+=[[:space:]]+).*$|\\1$BLOCK_HEIGHT| ; \\\ns|^(trust_hash[[:space:]]+=[[:space:]]+).*$|\\1\\"$TRUST_HASH\\"|" $HOME/.sentinelhub/config/config.toml\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"This script ensures that the new synchronization process starts from a point slightly before the absolute latest block. This provides a margin of safety and avoid potential synchronization issues that might occur due to due network delays or other factors."}),"\n",(0,t.jsx)(n.p,{children:"Make the file executable"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"chmod +x state-sync.sh\n"})}),"\n",(0,t.jsx)(n.p,{children:"Launch the script"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"./state-sync.sh\n"})}),"\n",(0,t.jsx)(n.p,{children:"Start the node by running the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo systemctl start sentinelhub.service\n"})}),"\n",(0,t.jsx)(n.p,{children:"Your node will fully synchronize within 10 minutes. Periodically check its status using the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl --silent "http://localhost:26657/status" | jq -S\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If the value of ",(0,t.jsx)(n.code,{children:"result.sync_info.catching_up"})," is ",(0,t.jsx)(n.code,{children:"false"}),", it indicates that the node is synchronized and ready to start signing blocks."]}),"\n",(0,t.jsx)(n.p,{children:"To monitor the logs in real-time, use the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo journalctl -u sentinelhub.service -f --output=cat\n"})}),"\n",(0,t.jsx)(n.h3,{id:"free-up-space",children:"Free up space"}),"\n",(0,t.jsx)(n.p,{children:"This step should be performed regularly, as the hard disk tends to fill up over time. It is advisable to establish a monitoring structure to determine when it is necessary to free up space."}),"\n",(0,t.jsxs)(n.p,{children:["To get started, edit the ",(0,t.jsx)(n.code,{children:"state-sync.sh"})," file and and include the final three lines"]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"state-sync.sh"}),(0,t.jsx)("p",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\nSNAP_RPC="https://rpc.sentinel.co:443"\nSNAP_RPC2="https://rpc-sentinel.whispernode.com:443"\n\nLATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height); \\\nBLOCK_HEIGHT=$((LATEST_HEIGHT - 1000)); \\\nTRUST_HASH=$(curl -s "$SNAP_RPC/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)\n\nsed -i.bak -E "s|^(enable[[:space:]]+=[[:space:]]+).*$|\\1true| ; \\\ns|^(rpc_servers[[:space:]]+=[[:space:]]+).*$|\\1\\"$SNAP_RPC,$SNAP_RPC2\\"| ; \\\ns|^(trust_height[[:space:]]+=[[:space:]]+).*$|\\1$BLOCK_HEIGHT| ; \\\ns|^(trust_hash[[:space:]]+=[[:space:]]+).*$|\\1\\"$TRUST_HASH\\"|" $HOME/.sentinelhub/config/config.toml\n\nmv $HOME/.sentinelhub/data $HOME/.sentinelhub/data-old\nmkdir -p $HOME/.sentinelhub/data\ncp $HOME/.sentinelhub/data-old/priv_validator_state.json $HOME/.sentinelhub/data\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"Stop the node"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo systemctl stop sentinelhub.service\n"})}),"\n",(0,t.jsx)(n.p,{children:"Launch the script"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"./state-sync.sh\n"})}),"\n",(0,t.jsx)(n.p,{children:"Start the node by running the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo systemctl start sentinelhub.service\n"})}),"\n",(0,t.jsx)(n.p,{children:"Your node will fully synchronize within 10 minutes. Periodically check its status using the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl --silent "http://localhost:26657/status" | jq -S\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If the value of ",(0,t.jsx)(n.code,{children:"result.sync_info.catching_up"})," is ",(0,t.jsx)(n.code,{children:"false"}),", it indicates that the node is synchronized and ready to start signing blocks."]}),"\n",(0,t.jsx)(n.p,{children:"To monitor the logs in real-time, use the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo journalctl -u sentinelhub.service -f --output=cat\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Once your node has completed synchronization, you can confidently proceed to delete the ",(0,t.jsx)(n.code,{children:".sentinel/data-old/"})," folder."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo rm -fr $HOME/.sentinelhub/data-old/\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>o});var t=s(7294);const a={},i=t.createContext(a);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);