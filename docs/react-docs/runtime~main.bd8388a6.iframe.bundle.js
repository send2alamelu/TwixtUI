(()=>{"use strict";var deferred,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({45:"TextArea-stories",186:"Divider-stories",392:"Checkbox-stories",627:"Heading-stories",862:"PopoverButton-stories",1207:"SimpleTable-stories",1284:"Stats-stories",1292:"ToolName-stories",1399:"Badges-stories",1935:"InputSingleLine-stories",1991:"Input-TimePicker-stories",2092:"List-CollapsibleList-stories",2271:"Containers-Popover-stories",2494:"CallsToAction-FloatingButton-stories",3504:"CopyButton-stories",3623:"Switch-stories",4258:"Modal-stories",4856:"UserCard-stories",4901:"CallsToAction-ButtonGroup-stories",5028:"Containers-FlexBox-stories",5155:"Containers-StackBox-stories",5196:"CopyLink-stories",5532:"CallsToAction-ToggleButton-stories",5583:"Dialog-stories",5707:"Configure-mdx",5769:"SimpleCodeEditor-stories",5780:"Input-DatePicker-stories",5792:"CallsToAction-Button-stories",6283:"UseFacepile-stories",6892:"CallsToAction-Link-stories",6946:"OneSelectDropdown-stories",7084:"Communications-Spinner-stories",7167:"Alert-stories",7186:"Containers-BoxItem-stories",7234:"UserStackList-stories",7262:"TwixtIcon-stories",7618:"Skeleton-stories",7761:"Comments-stories",7939:"_Deprecated-Tooltip-stories",7943:"Communications-HoverCard-stories",8217:"UserNameInput-stories",8384:"Header-stories",8453:"PageProgressLine-stories",8570:"Communications-Tooltip-stories",8600:"CallsToAction-SplitButton-stories",9408:"Toast-stories",9776:"PostItem-stories",9988:"List-List-stories"}[chunkId]||chunkId)+"."+{45:"081bdb86",186:"a559b66d",392:"96161681",627:"7de0ca74",862:"9a34a136",1207:"a4830178",1284:"ec6769a2",1292:"d3f484ef",1294:"dbf9ff05",1399:"4732dfed",1935:"6d78970e",1991:"48ef2ee2",2092:"5c05ff6d",2271:"bbaff0da",2494:"0b75bb43",2853:"7b4ee903",3504:"321ea25d",3623:"ba026de4",4258:"e15c87a5",4449:"c0f3571a",4762:"02accb4b",4856:"d6514d18",4901:"af59ec2d",5028:"5cd47ee1",5155:"4cd2b84c",5196:"79ed86af",5532:"e4533958",5583:"09574bfc",5707:"6864d688",5769:"9b99f183",5780:"03c1d242",5792:"aa2a658b",6041:"daf9377a",6283:"1b94488c",6560:"416a5c66",6718:"eb911e85",6892:"ec4a8dd6",6946:"97c30830",7084:"a16642c9",7167:"64b74504",7186:"b386da33",7234:"a2e2724d",7262:"e8de33a0",7364:"97c8ff55",7618:"ab97f135",7761:"e6080b54",7939:"af5ac877",7943:"6a74f9dd",8188:"32aa8b89",8217:"d753d846",8384:"977c478b",8453:"999ba8a2",8570:"c0566e3a",8600:"152d3305",9408:"911534a9",9776:"e5327bd0",9988:"e63c3114"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=module=>((module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="react-examples:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","react-examples:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={5354:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(5354!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunkreact_examples=self.webpackChunkreact_examples||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();