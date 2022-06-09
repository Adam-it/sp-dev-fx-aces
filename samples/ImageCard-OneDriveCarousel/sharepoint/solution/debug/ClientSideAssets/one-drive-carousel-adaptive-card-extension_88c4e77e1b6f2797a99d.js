define("457c1b53-ad6c-425e-8c45-4dd5cac1eabe_1.0.0",["@microsoft/sp-loader","OneDriveCarouselAdaptiveCardExtensionStrings","@microsoft/sp-adaptive-card-extension-base"],function(n,a,i){return function(e){function t(t){for(var n,i,r=t[0],o=t[1],s=0,c=[];s<r.length;s++)i=r[s],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&c.push(a[i][0]),a[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(d&&d(t);c.length;)c.shift()()}var n={},a={1:0};function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){for(var n=[],o=function(e){return{0:[{i:"f9e737b7-f0df-4597-ba8c-3060f82380db",v:"1.13.0",m:"26ea"}]}[e]||[]}(t),s=0;s<o.length;s++)e[o[s].m]||function(t){n.push(r.SPComponentLoader.loadComponentById(t.i,t.v).then(function(n){e[t.m]=function(e){e.exports=n}}))}(o[s]);var c=a[t];if(0!==c)if(c)n.push(c[2]);else{var d=new Promise(function(e,n){c=a[t]=[e,n]});n.push(c[2]=d);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=function(e){return i.p+"chunk."+({0:"OneDriveCarousel-property-pane"}[e]||e)+"_"+{0:"b870227300eb37ad716d"}[e]+".js"}(t),0!==u.src.indexOf(window.location.origin+"/")&&(u.crossOrigin="anonymous");var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",f.name="ChunkLoadError",f.type=i,f.request=r,n[1](f)}a[t]=void 0}};var p=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(n)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var r=i("I6O9");i.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp_457c1b53_ad6c_425e_8c45_4dd5cac1eabe_1_0_0=window.webpackJsonp_457c1b53_ad6c_425e_8c45_4dd5cac1eabe_1_0_0||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=s;return function(){var e,t=document.getElementsByTagName("script"),n=/one-drive-carousel-adaptive-card-extension_88c4e77e1b6f2797a99d\.js/i;if(t&&t.length)for(var a=0;a<t.length;a++)if(t[a]){var r=t[a].getAttribute("src");if(r&&r.match(n)){e=r.substring(0,r.lastIndexOf("/")+1);break}}if(!e)for(var o in window.__setWebpackPublicPathLoaderSrcRegistry__)if(o&&o.match(n)){e=o.substring(0,o.lastIndexOf("/")+1);break}i.p=e}(),i(i.s="HgIW")}({HL1r:function(e,t,n){e.exports=n.p+"Error_91219b53ac61ffdaeadf71e2bc0fb628.png"},HgIW:function(e,t,n){"use strict";n.r(t),n.d(t,"QUICK_VIEW_REGISTRY_ID",function(){return m});var a,i=n("lz/E"),r=n("ksWx"),o=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),Object.defineProperty(t.prototype,"cardButtons",{get:function(){var e=[];return this.state.error||this.state.isLoading||!this.state.folderHasImages||null!=this.properties.hideButtons&&0!=this.properties.hideButtons||null==this.state.targetFolder||(e=[{title:r.QuickViewButton,action:{type:"QuickView",parameters:{view:m}}}]),e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"data",{get:function(){return{primaryText:this.getPrimaryText(),imageUrl:this.getImageUrl()}},enumerable:!1,configurable:!0}),t.prototype.getPrimaryText=function(){if(this.state.error)return r.ErrorMessage;var e=r.PrimaryText;return this.properties.description?e=this.properties.description:this.state.targetFolder&&(e=this.state.targetFolder.name),e},t.prototype.getImageUrl=function(){if(this.state.error)return n("HL1r");if(0==this.state.isLoading){if(this.state.targetFolder&&this.state.targetFolder.children&&this.state.targetFolder.children.length>0)return this.state.targetFolder.children[this.state.itemIndex].webUrl;if(0==this.state.folderHasImages)return n("y8Iw")}return n("qWv0")},Object.defineProperty(t.prototype,"onCardSelection",{get:function(){return{type:"ExternalLink",parameters:{target:this.state.targetFolder?this.state.targetFolder.webUrl:"https://onedrive.com/"}}},enumerable:!1,configurable:!0}),t}(i.BaseImageCardView),c=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),Object.defineProperty(t.prototype,"data",{get:function(){var e=this.state.targetFolder&&this.state.targetFolder.children?this.state.targetFolder.children[this.state.itemIndex]:void 0;return{detailsLabel:r.DetailsLabel,fileNameLabel:r.FileNameLabel,sizeLabel:r.SizeLabel,modifiedLabel:r.ModifiedLabel,currentItem:e,hasImage:e&&null!=e.image&&null!=e.image.width&&null!=e.image.height,hasDateTime:e&&null!=e.lastModifiedDateTime}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"template",{get:function(){return n("wYKR")},enumerable:!1,configurable:!0}),t}(i.BaseAdaptiveCardView),l=function(){function e(){}return e.path_me="me",e.path_drive="drive",e.path_drives="drives",e.path_root="root",e.path_children="children",e.path_items="items",e.prop_id="id",e.prop_name="name",e.prop_webUrl="webUrl",e.query_parameter_expand="expand",e}(),u=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),f=function(e,t,n,a){return new(n||(n=Promise))(function(i,r){function o(e){try{c(a.next(e))}catch(e){r(e)}}function s(e){try{c(a.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(o,s)}c((a=a.apply(e,t||[])).next())})},p=function(e,t){var n,a,i,r,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(i=2&r[0]?a.return:r[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,r[1])).done)return i;switch(a=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,a=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){o=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){o.label=r[1];break}if(6===r[0]&&o.label<i[1]){o.label=i[1],i=r;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(r);break}i[2]&&o.ops.pop(),o.trys.pop();continue}r=t.call(e,o)}catch(e){r=[6,e],a=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}},m="OneDriveCarousel_QUICK_VIEW",_=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.loadDrives=function(){return f(t,void 0,void 0,function(){var e=this;return p(this,function(t){switch(t.label){case 0:return[4,this.graphClient.api("/"+l.path_me+"/"+l.path_drives+"/"+this.state.rootDriveId+"/"+l.path_root+"/"+l.path_children).select(l.prop_id+","+l.prop_name).get(function(t,n){t?e.setError(t):e.setState({drivesResults:n.value.map(function(e,t){return{key:e.id,text:e.name}})})})];case 1:return t.sent(),[2]}})})},t.loadTargetDriveItems=function(){t.setState({isLoading:!0}),t.graphClient.api("/"+l.path_me+"/"+l.path_drives+"/"+t.state.rootDriveId+"/"+l.path_items+"/"+t.properties.selectedDriveId).expand(l.path_children).get(function(e,n){e?t.setError(e):(n&&n.children&&(n.children=n.children.filter(function(e){return e.image})),t.setState({targetFolder:n,folderHasImages:n.children&&n.children.length>0,isLoading:!1}))})},t.updateImageIndex=function(){if(t.state.targetFolder&&t.state.targetFolder.children&&t.state.targetFolder.children.length>0){var e=t.state.itemIndex;1==t.properties.randomizeImage?e=t.randomIndex(0,t.state.targetFolder.children.length-1):++e>=t.state.targetFolder.children.length&&(e=0),t.setState({itemIndex:e})}},t.setError=function(e){t.setState({error:e,isLoading:!1}),console.log(e)},t}return u(t,e),t.prototype.onInit=function(){var e=this;return this.state={description:this.properties.description,rootDriveId:void 0,drivesResults:void 0,itemIndex:0,targetFolder:void 0,error:void 0,isLoading:!0,folderHasImages:!1},this.cardNavigator.register("OneDriveCarousel_CARD_VIEW",function(){return new s}),this.quickViewNavigator.register(m,function(){return new d}),setTimeout(function(){return f(e,void 0,void 0,function(){var e,t=this;return p(this,function(n){switch(n.label){case 0:return e=this,[4,this.context.msGraphClientFactory.getClient()];case 1:return e.graphClient=n.sent(),this.graphClient.api("/"+l.path_me+"/"+l.path_drives).select(l.prop_id+","+l.prop_name).get(function(e,n){e?t.setError(e):(t.setState({rootDriveId:n&&n.value&&n.value.length>0?n.value[0].id:void 0}),t.state.rootDriveId?(t.loadDrives(),t.properties.selectedDriveId&&(t.loadTargetDriveItems(),t.properties.timerSeconds&&(t.updateImageTimer=setInterval(t.updateImageIndex,1e3*t.properties.timerSeconds)))):t.setState({isLoading:!1}))}),[2]}})})},500),Promise.resolve()},Object.defineProperty(t.prototype,"title",{get:function(){return this.properties.title},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"iconProperty",{get:function(){return this.properties.iconProperty||n("fpkf")},enumerable:!1,configurable:!0}),t.prototype.loadPropertyPaneResources=function(){var e=this;return n.e(0).then(n.bind(null,"QKni")).then(function(t){e._deferredPropertyPane=new t.OneDriveCarouselPropertyPane})},t.prototype.onPropertyPaneFieldChanged=function(e,t,n){t!=n&&("selectedDriveId"==e?this.loadTargetDriveItems():"timerSeconds"==e&&(clearInterval(this.updateImageTimer),this.updateImageTimer=setInterval(this.updateImageIndex,1e3*this.properties.timerSeconds)))},t.prototype.renderCard=function(){return"OneDriveCarousel_CARD_VIEW"},t.prototype.getPropertyPaneConfiguration=function(){return this._deferredPropertyPane.getPropertyPaneConfiguration(this.state.drivesResults)},t.prototype.randomIndex=function(e,t){var n=Math.floor(Math.random()*(t-e+1)+e);return n==this.state.itemIndex?this.randomIndex(e,t):n},t}(i.BaseAdaptiveCardExtension);t.default=_},I6O9:function(e,t){e.exports=n},fpkf:function(e,t,n){e.exports=n.p+"SharePointLogo_0101288365319b852f2a3b625daa3a5d.svg"},ksWx:function(e,t){e.exports=a},"lz/E":function(e,t){e.exports=i},qWv0:function(e,t,n){e.exports=n.p+"loading_98fcf8590b4fadb6e8c8653a1a1627a4.svg"},wYKR:function(e){e.exports=JSON.parse('{"type":"AdaptiveCard","$schema":"http://adaptivecards.io/schemas/adaptive-card.json","version":"1.3","body":[{"type":"TextBlock","text":"${detailsLabel}","wrap":true,"size":"MediuLabelm","spacing":"Large","weight":"bolder"},{"type":"Container","style":"emphasis","items":[{"type":"ColumnSet","columns":[{"type":"Column","width":"stretch","items":[{"type":"TextBlock","text":"${fileNameLabel}","wrap":true,"weight":"Bolder"}]},{"type":"Column","width":"stretch","items":[{"type":"TextBlock","text":"${currentItem.name}","wrap":true}]}],"spacing":"Medium","separator":false},{"type":"ColumnSet","columns":[{"type":"Column","width":"stretch","items":[{"type":"TextBlock","text":"${sizeLabel}","wrap":true,"weight":"Bolder"}]},{"type":"Column","width":"stretch","items":[{"type":"TextBlock","text":"${currentItem.image.width} x ${currentItem.image.height}","wrap":true}]}],"spacing":"Medium","separator":false,"$when":"${hasImage}"},{"type":"ColumnSet","columns":[{"type":"Column","width":"stretch","items":[{"type":"TextBlock","text":"${modifiedLabel}","wrap":true,"weight":"Bolder"}]},{"type":"Column","width":"stretch","items":[{"type":"TextBlock","text":"${formatDateTime(currentItem.lastModifiedDateTime, \'dd/MM/yyyy\')}","wrap":true}]}],"spacing":"Medium","separator":false,"$when":"${hasDateTime}"},{"type":"Container","minHeight":"10px"},{"type":"Container","items":[{"type":"ColumnSet","columns":[{"type":"Column","width":"stretch","backgroundImage":{"url":"${currentItem.webUrl}","horizontalAlignment":"Center"},"minHeight":"240px","bleed":true}],"horizontalAlignment":"Center"}],"minHeight":"1px","bleed":true,"spacing":"None","id":"img_set_1"}]}]}')},y8Iw:function(e,t,n){e.exports=n.p+"MicrosoftLogo_fd1e2cfef93de5e13caec63b01c66b4e.png"}})});