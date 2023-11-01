"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[809],{1770:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=s(5893),a=s(1151);const i={title:"Free Up Space with State Sync",description:"When your HD space growing too much",sidebar_position:8},r="Free Up Space with State Sync",c={id:"sentinelguides/validator/state-sync",title:"Free Up Space with State Sync",description:"When your HD space growing too much",source:"@site/docs/sentinelguides/validator/state-sync.md",sourceDirName:"sentinelguides/validator",slug:"/sentinelguides/validator/state-sync",permalink:"/docs/sentinelguides/validator/state-sync",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sentinelguides/validator/state-sync.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Free Up Space with State Sync",description:"When your HD space growing too much",sidebar_position:8},sidebar:"validatorSidebar",previous:{title:"Basic Commands",permalink:"/docs/sentinelguides/validator/basic-cmd"},next:{title:"TMKMS Security",permalink:"/docs/category/tmkms-security"}},o={},l=[{value:"Create State Sync script file",id:"create-state-sync-script-file",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"free-up-space-with-state-sync",children:"Free Up Space with State Sync"}),"\n",(0,n.jsx)(t.p,{children:"State Sync helps you free up space on your hard disk and should be performed regularly. You are encouraged to set up a monitoring structure to check when it is time to free up space."}),"\n",(0,n.jsxs)(t.p,{children:["We assume you have Cosmovisor installed, if you do not have it, follow the related ",(0,n.jsx)(t.a,{href:"https://trinityprivacy.gitbook.io/sentinel-dvpn-validator-setup-guide/cosmovisor",children:"module"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"create-state-sync-script-file",children:"Create State Sync script file"}),"\n",(0,n.jsx)(t.p,{children:"If you still don't have it, create the file state-sync.sh"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sudo nano state-sync.sh\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Add the following code in it (to add your own or favourite RPC check this list ",(0,n.jsx)(t.a,{href:"https://cosmos.directory/sentinel/nodes",children:"here"}),"):"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",metastring:"title=state-sinc.sh",children:'#!/bin/bash\n\nSNAP_RPC="https://rpc.sentinel.co:443"\nSNAP_RPC2="https://rpc-sentinel.whispernode.com:443"\n\nLATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height); \\\nBLOCK_HEIGHT=$((LATEST_HEIGHT - 1000)); \\\nTRUST_HASH=$(curl -s "$SNAP_RPC/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)\n\nsed -i.bak -E "s|^(enable[[:space:]]+=[[:space:]]+).*$|\\1true| ; \\\ns|^(rpc_servers[[:space:]]+=[[:space:]]+).*$|\\1\\"$SNAP_RPC,$SNAP_RPC2\\"| ; \\\ns|^(trust_height[[:space:]]+=[[:space:]]+).*$|\\1$BLOCK_HEIGHT| ; \\\ns|^(trust_hash[[:space:]]+=[[:space:]]+).*$|\\1\\"$TRUST_HASH\\"|" $HOME/.sentinelhub/config/config.toml\n\nmv $HOME/.sentinelhub/data $HOME/.sentinelhub/data-old\nmkdir -p $HOME/.sentinelhub/data\ncp $HOME/.sentinelhub/data-old/priv_validator_state.json $HOME/.sentinelhub/data\n'})}),"\n",(0,n.jsx)(t.p,{children:"This script ensures that the new synchronization process starts from a point slightly before the absolute latest block. This provides a margin of safety and avoid potential synchronization issues that might occur due to due network delays or other factors."}),"\n",(0,n.jsx)(t.p,{children:"Make the file executable"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"chmod +x state-sync.sh\n"})}),"\n",(0,n.jsx)(t.p,{children:"Stop the node"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sudo systemctl stop cosmovisor.service\n"})}),"\n",(0,n.jsx)(t.p,{children:"Launch the state-sync script"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"./state-sync.sh\n"})}),"\n",(0,n.jsx)(t.p,{children:"Reset the node"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# On some tendermint chains\nsentinelhub unsafe-reset-all\n\n# On other tendermint chains\nsentinelhub tendermint unsafe-reset-all --home $HOME/.sentinelhub --keep-addr-book\n"})}),"\n",(0,n.jsx)(t.p,{children:"Start the node"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sudo systemctl start cosmovisor.service\n"})}),"\n",(0,n.jsx)(t.p,{children:"Use this command to check logs in real time"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sudo journalctl -u cosmovisor.service -f\n"})}),"\n",(0,n.jsx)(t.p,{children:"If everything goes well, your node should start syncing within 10 minutes."})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>c,a:()=>r});var n=s(7294);const a={},i=n.createContext(a);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);