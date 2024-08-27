"use strict";(self.webpackChunkreact_examples=self.webpackChunkreact_examples||[]).push([[8600],{"./stories/CallsToAction/SplitButton.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DocumentManagement:()=>DocumentManagement,FileActions:()=>FileActions,SettingsManagement:()=>SettingsManagement,UserProfileActions:()=>UserProfileActions,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SplitButton_stories});var react=__webpack_require__("./node_modules/react/index.js"),ButtonGroup=__webpack_require__("../react/src/CallsToAction/ButtonGroup/index.js"),Button=__webpack_require__("../react/src/CallsToAction/Button/index.js"),Icon=__webpack_require__("../react/src/Icon.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function SplitButton(param){var _param_initialLabel=param.initialLabel,initialLabel=void 0===_param_initialLabel?"Select Action":_param_initialLabel,_param_options=param.options,options=void 0===_param_options?[]:_param_options,_useState=_sliced_to_array((0,react.useState)(!1),2),isOpen=_useState[0],setIsOpen=_useState[1],_useState1=_sliced_to_array((0,react.useState)(null),2),selectedOption=_useState1[0],setSelectedOption=_useState1[1];return react.createElement("div",{className:"relative inline-block"},react.createElement(ButtonGroup.A,null,react.createElement(Button.A,{onClick:function(){selectedOption&&selectedOption.onClick&&selectedOption.onClick()},label:selectedOption?selectedOption.label:initialLabel}),react.createElement(Button.A,{onClick:function(){setIsOpen(!isOpen)},hideLabel:!0,rightIcon:react.createElement(Icon.A,{type:"chevronDown"})})),isOpen&&react.createElement("div",{className:"absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg"},options.map((function(option,index){return react.createElement(Button.A,{key:index,onClick:function(){return function(option){setSelectedOption(option),setIsOpen(!1)}(option)},label:option.label,background:"bg-white",color:"text-gray-700",overwriteClass:"w-full text-left px-4 py-2 hover:bg-gray-100"})}))))}const SplitButton_SplitButton=SplitButton;SplitButton.__docgenInfo={description:"",methods:[],displayName:"SplitButton",props:{initialLabel:{defaultValue:{value:"'Select Action'",computed:!1},required:!1},options:{defaultValue:{value:"[]",computed:!1},required:!1}}};var v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("@storybook/core-events/preview-errors"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a};function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id="object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}const SplitButton_stories={title:"Call To Action/TwixtSplitButton",component:SplitButton_SplitButton,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{initialLabel:{control:"text",description:"Initial label for the main button"},options:{control:"array",description:"Array of options with label and onClick handlers"}}};var DocumentManagement={args:{initialLabel:"Document Actions",options:[{label:"Download Document",onClick:action("Download Document clicked"),icon:react.createElement(Icon.A,{type:"file",variant:"filled"})},{label:"Share Document",onClick:action("Share Document clicked"),icon:react.createElement(Icon.A,{type:"file",variant:"filled"})},{label:"Restrict Access",onClick:action("Restrict Access clicked"),icon:react.createElement(Icon.A,{type:"lock",variant:"filled"})}]}},UserProfileActions={args:{initialLabel:"Profile Options",options:[{label:"Edit Profile",onClick:action("Edit Profile clicked"),icon:react.createElement(Icon.A,{type:"file",variant:"filled"})},{label:"Change Password",onClick:action("Change Password clicked"),icon:react.createElement(Icon.A,{type:"lock",variant:"filled"})},{label:"Logout",onClick:action("Logout clicked"),icon:react.createElement(Icon.A,{type:"share",variant:"filled"})}]}},SettingsManagement={args:{initialLabel:"Settings",options:[{label:"Account Settings",onClick:action("Account Settings clicked"),icon:react.createElement(Icon.A,{type:"file",variant:"filled"})},{label:"Privacy Settings",onClick:action("Privacy Settings clicked"),icon:react.createElement(Icon.A,{type:"lock",variant:"filled"})},{label:"Notification Settings",onClick:action("Notification Settings clicked"),icon:react.createElement(Icon.A,{type:"share",variant:"filled"})}]}},FileActions={args:{initialLabel:"File Actions",options:[{label:"Upload File",onClick:action("Upload File clicked"),icon:react.createElement(Icon.A,{type:"file",variant:"filled"})},{label:"Delete File",onClick:action("Delete File clicked"),icon:react.createElement(Icon.A,{type:"lock",variant:"filled"})},{label:"Rename File",onClick:action("Rename File clicked"),icon:react.createElement(Icon.A,{type:"share",variant:"filled"})}]}};const __namedExportsOrder=["DocumentManagement","UserProfileActions","SettingsManagement","FileActions"];DocumentManagement.parameters={...DocumentManagement.parameters,docs:{...DocumentManagement.parameters?.docs,source:{originalSource:"{\n  args: {\n    initialLabel: 'Document Actions',\n    options: [{\n      label: 'Download Document',\n      onClick: action('Download Document clicked'),\n      icon: <TwixtIcon type=\"file\" variant=\"filled\" />\n    }, {\n      label: 'Share Document',\n      onClick: action('Share Document clicked'),\n      icon: <TwixtIcon type=\"file\" variant=\"filled\" />\n    }, {\n      label: 'Restrict Access',\n      onClick: action('Restrict Access clicked'),\n      icon: <TwixtIcon type=\"lock\" variant=\"filled\" />\n    }]\n  }\n}",...DocumentManagement.parameters?.docs?.source}}},UserProfileActions.parameters={...UserProfileActions.parameters,docs:{...UserProfileActions.parameters?.docs,source:{originalSource:"{\n  args: {\n    initialLabel: 'Profile Options',\n    options: [{\n      label: 'Edit Profile',\n      onClick: action('Edit Profile clicked'),\n      icon: <TwixtIcon type=\"file\" variant=\"filled\" />\n    }, {\n      label: 'Change Password',\n      onClick: action('Change Password clicked'),\n      icon: <TwixtIcon type=\"lock\" variant=\"filled\" />\n    }, {\n      label: 'Logout',\n      onClick: action('Logout clicked'),\n      icon: <TwixtIcon type=\"share\" variant=\"filled\" />\n    }]\n  }\n}",...UserProfileActions.parameters?.docs?.source}}},SettingsManagement.parameters={...SettingsManagement.parameters,docs:{...SettingsManagement.parameters?.docs,source:{originalSource:"{\n  args: {\n    initialLabel: 'Settings',\n    options: [{\n      label: 'Account Settings',\n      onClick: action('Account Settings clicked'),\n      icon: <TwixtIcon type=\"file\" variant=\"filled\" />\n    }, {\n      label: 'Privacy Settings',\n      onClick: action('Privacy Settings clicked'),\n      icon: <TwixtIcon type=\"lock\" variant=\"filled\" />\n    }, {\n      label: 'Notification Settings',\n      onClick: action('Notification Settings clicked'),\n      icon: <TwixtIcon type=\"share\" variant=\"filled\" />\n    }]\n  }\n}",...SettingsManagement.parameters?.docs?.source}}},FileActions.parameters={...FileActions.parameters,docs:{...FileActions.parameters?.docs,source:{originalSource:"{\n  args: {\n    initialLabel: 'File Actions',\n    options: [{\n      label: 'Upload File',\n      onClick: action('Upload File clicked'),\n      icon: <TwixtIcon type=\"file\" variant=\"filled\" />\n    }, {\n      label: 'Delete File',\n      onClick: action('Delete File clicked'),\n      icon: <TwixtIcon type=\"lock\" variant=\"filled\" />\n    }, {\n      label: 'Rename File',\n      onClick: action('Rename File clicked'),\n      icon: <TwixtIcon type=\"share\" variant=\"filled\" />\n    }]\n  }\n}",...FileActions.parameters?.docs?.source}}}},"../react/src/CallsToAction/ButtonGroup/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ButtonGroup_ButtonGroup});var react=__webpack_require__("./node_modules/react/index.js");function ButtonGroup(param){var children=param.children,enhancedChildren=react.Children.map(children,(function(child){return react.isValidElement(child)?react.cloneElement(child,{background:"",color:"",overwriteClass:"py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"}):child}));return react.createElement("div",{className:"inline-flex rounded-lg shadow-sm"},enhancedChildren)}const ButtonGroup_ButtonGroup=ButtonGroup;ButtonGroup.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup"}},"../react/src/CallsToAction/Button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TwixtButton});var react=__webpack_require__("./node_modules/react/index.js"),Spinner=__webpack_require__("../react/src/Communications/Spinner/index.js");function TwixtButton(param){var _param_background=param.background,background=void 0===_param_background?"bg-indigo-500":_param_background,_param_color=param.color,color=void 0===_param_color?"text-white":_param_color,children=param.children,_param_leftIcon=param.leftIcon,leftIcon=void 0===_param_leftIcon?null:_param_leftIcon,_param_rightIcon=param.rightIcon,rightIcon=void 0===_param_rightIcon?null:_param_rightIcon,label=param.label,_param_hideLabel=param.hideLabel,hideLabel=void 0!==_param_hideLabel&&_param_hideLabel,_param_disabled=param.disabled,disabled=void 0!==_param_disabled&&_param_disabled,_param_showSpinner=param.showSpinner,showSpinner=void 0!==_param_showSpinner&&_param_showSpinner,onClick=param.onClick,buttonClasses=param.overwriteClass||"px-4 py-2 rounded-md";return react.createElement("button",{onClick,className:"flex items-center justify-center space-x-2 ".concat(background," ").concat(color," ").concat(buttonClasses),disabled:showSpinner||disabled},children||react.createElement(react.Fragment,null,leftIcon&&react.createElement("span",null,leftIcon),!hideLabel&&react.createElement("span",null,label),showSpinner&&react.createElement(Spinner.A,{size:"sm",overwriteClass:"flex"}),rightIcon&&react.createElement("span",null,rightIcon)))}TwixtButton.__docgenInfo={description:"",methods:[],displayName:"TwixtButton",props:{background:{defaultValue:{value:"'bg-indigo-500'",computed:!1},required:!1},color:{defaultValue:{value:"'text-white'",computed:!1},required:!1},leftIcon:{defaultValue:{value:"null",computed:!1},required:!1},rightIcon:{defaultValue:{value:"null",computed:!1},required:!1},hideLabel:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},showSpinner:{defaultValue:{value:"false",computed:!1},required:!1}}}},"../react/src/Communications/Spinner/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Spinner_Spinner});var react=__webpack_require__("./node_modules/react/index.js"),Spinner=function(param){var _param_label=param.label,label=void 0===_param_label?"":_param_label,_param_size=param.size,size=void 0===_param_size?"md":_param_size,_param_fullPage=param.fullPage,fullPage=void 0!==_param_fullPage&&_param_fullPage,_param_overwriteClass=param.overwriteClass,overwriteClass=void 0===_param_overwriteClass?"":_param_overwriteClass,_param_bgColor=param.bgColor,sizeClasses={sm:"w-4 h-4 text-xs",md:"w-8 h-8 text-sm",lg:"w-16 h-16 text-base",xl:"w-24 h-24 text-lg"},spinnerSize=sizeClasses[size]||sizeClasses.md,fullPageClasses=fullPage?"fixed inset-0 flex flex-col items-center justify-center ".concat(void 0===_param_bgColor?"bg-gray-200 bg-opacity-70":_param_bgColor," z-50"):"";return react.createElement("div",{role:"status",className:"".concat(fullPageClasses," ").concat(overwriteClass)},react.createElement("svg",{"aria-hidden":"true",className:"inline ".concat(spinnerSize.split(" ")[0]," text-gray-200 animate-spin fill-blue-600"),viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},react.createElement("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),react.createElement("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})),label&&react.createElement("span",{className:"ml-2 mt-2 ".concat(spinnerSize.split(" ")[1])},label))};const Spinner_Spinner=Spinner;Spinner.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{label:{defaultValue:{value:"''",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},fullPage:{defaultValue:{value:"false",computed:!1},required:!1},overwriteClass:{defaultValue:{value:"''",computed:!1},required:!1},bgColor:{defaultValue:{value:"'bg-gray-200 bg-opacity-70'",computed:!1},required:!1}}}},"../react/src/Icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TwixtIcon});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_icons_fa__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../react/node_modules/react-icons/fa/index.mjs"),react_icons_ci__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../react/node_modules/react-icons/ci/index.mjs"),react_icons_io5__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../react/node_modules/react-icons/io5/index.mjs"),react_icons_pi__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../react/node_modules/react-icons/pi/index.mjs"),iconTypes={notification:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.jNV,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.CzP},terminal:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.iuJ,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaTerminalSlash},help:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.gZZ,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaQuestionCircleSlash},magnifier:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.KSO,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.onj},hamburger:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.OXb,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Hcp},verticalThreeDots:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.H_v,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.H_v},horizontalThreeDots:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.HFM,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.HFM},pin:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.LBY,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaThumbtackSlash},delete:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.qbC,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.RCe},add:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.OiG,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Hw0},chevronUp:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Ucs,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Ucs},chevronDown:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Vr3,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Vr3},chevronLeft:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__._Jj,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__._Jj},chevronRight:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.X6T,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.X6T},note:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.jie,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.jie},pencil:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Mbp,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Mbp},refresh:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Swo,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.KP4},learn:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.vd0,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.hko},monitor:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Wqt,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaDesktopAlt},import:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.PiR,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.PiR},export:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Mbn,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Mbn},filter:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.YsJ,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaFilterAlt},userAvatar:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.x$1,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.NBi},clipboard:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.O6N,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.O6N},checkedClipboard:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.aZA,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.aZA},headphone:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.tLl,outline:react_icons_ci__WEBPACK_IMPORTED_MODULE_2__.WLS},watch:{filled:react_icons_pi__WEBPACK_IMPORTED_MODULE_3__.CqA,outline:react_icons_pi__WEBPACK_IMPORTED_MODULE_3__.V3h},speaker:{filled:react_icons_pi__WEBPACK_IMPORTED_MODULE_3__.e8f,outline:react_icons_pi__WEBPACK_IMPORTED_MODULE_3__.lvJ},speakerSlashed:{filled:react_icons_pi__WEBPACK_IMPORTED_MODULE_3__.$3T,outline:react_icons_pi__WEBPACK_IMPORTED_MODULE_3__.TVP},file:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Gp9,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.t69},lock:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.JhU,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.nQ7},share:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.eb3,outline:null},user:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.x$1,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.VGZ},userSlashed:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.vYY,outline:null},userGraduate:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.mFx,outline:null},userGroup:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaUserGroup,outline:null},office:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.ymh,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.IqM},mobile:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.rle,outline:null},mail:{filled:null,outline:react_icons_ci__WEBPACK_IMPORTED_MODULE_2__.ep0},settings:{filled:react_icons_io5__WEBPACK_IMPORTED_MODULE_4__.ikl,outline:react_icons_io5__WEBPACK_IMPORTED_MODULE_4__.GD}};function TwixtIcon(param){var _iconTypes_type,_iconTypes_type1,_param_type=param.type,type=void 0===_param_type?"notification":_param_type,_param_variant=param.variant,variant=void 0===_param_variant?"filled":_param_variant,_param_size=param.size,size=void 0===_param_size?12:_param_size,_param_color=param.color,color=void 0===_param_color?"black":_param_color;if(!iconTypes[type]||!(null===(_iconTypes_type=iconTypes[type])||void 0===_iconTypes_type?void 0:_iconTypes_type[variant]))return null;var IconComponent=(null===(_iconTypes_type1=iconTypes[type])||void 0===_iconTypes_type1?void 0:_iconTypes_type1[variant])||iconTypes.notification[filled];return react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconComponent,{size,color})}TwixtIcon.__docgenInfo={description:"",methods:[],displayName:"TwixtIcon",props:{type:{defaultValue:{value:"'notification'",computed:!1},required:!1},variant:{defaultValue:{value:"'filled'",computed:!1},required:!1},size:{defaultValue:{value:"12",computed:!1},required:!1},color:{defaultValue:{value:"'black'",computed:!1},required:!1}}}}}]);