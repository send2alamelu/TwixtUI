"use strict";(self.webpackChunkreact_examples=self.webpackChunkreact_examples||[]).push([[5769],{"./stories/SimpleCodeEditor.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SimpleCodeEditor_stories,fullScreen:()=>fullScreen});var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("../react/node_modules/@uiw/react-codemirror/esm/index.js");function SimpleCodeEditor(param){var _param_height=param.height,height=void 0===_param_height?"200px":_param_height,_param_extensions=param.extensions,extensions=void 0===_param_extensions?[]:_param_extensions,_param_value=param.value,value=void 0===_param_value?"":_param_value,_param_onChange=param.onChange,onChange=void 0===_param_onChange?function(){}:_param_onChange;return react.createElement(esm.Ay,{height,extensions,value,onChange})}SimpleCodeEditor.__docgenInfo={description:"",methods:[],displayName:"SimpleCodeEditor",props:{height:{defaultValue:{value:"'200px'",computed:!1},required:!1},extensions:{defaultValue:{value:"[]",computed:!1},required:!1},value:{defaultValue:{value:"''",computed:!1},required:!1},onChange:{defaultValue:{value:"() =>{}",computed:!1},required:!1}}};const SimpleCodeEditor_stories={title:"Common/TwixtCodeEditor",component:SimpleCodeEditor,parameters:{},tags:["autodocs"],argTypes:{},args:{title:"Welcome to Twixt code editor Component",desc:"Explore the Twixt code editorfor improved layout designed to enhance your experience."}};var Default=function(args){return react.createElement(SimpleCodeEditor,args)};Default.args={height:"200px",extensions:[],value:"",onChange:function(){}};var fullScreen=function(args){return react.createElement(SimpleCodeEditor,args)};fullScreen.args={height:"100vh",extensions:[],value:"",onChange:function(){}};const __namedExportsOrder=["Default","fullScreen"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <SimpleCodeEditor {...args} />",...Default.parameters?.docs?.source}}},fullScreen.parameters={...fullScreen.parameters,docs:{...fullScreen.parameters?.docs,source:{originalSource:"args => <SimpleCodeEditor {...args} />",...fullScreen.parameters?.docs?.source}}}}}]);