(()=>{"use strict";var e={level:(0,3),error:function(){if(e.level<=3){for(var n,o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];(n=console).log.apply(n,["[cldexp]"].concat(r))}},warning:function(){if(e.level<=2){for(var n,o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];(n=console).log.apply(n,["[cldexp]"].concat(r))}},info:function(){if(e.level<=1){for(var n,o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];(n=console).log.apply(n,["[cldexp]"].concat(r))}},debug:function(){if(e.level<=0){for(var n,o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];(n=console).log.apply(n,["[cldexp]"].concat(r))}}};const n=e;n.debug("[inj] in inj.js"),"claude.ai"===new URL(document.URL).hostname?(n.debug("[inj] hostname is claude.ai"),window.addEventListener("message",(function(e){if(n.debug("[inj] Received message:",e),"https://claude.ai"===e.origin){if("ReqOrgID"===e.data){n.debug("[inj] Get Org ID from:",window.location.href);var o=document.querySelector("body"),r=o[Object.keys(o).find((function(e){return e.startsWith("__reactProps")}))].children[0].props.value.find((function(e){return"lastActiveOrg"===e.name})).value;n.debug("[inj] Org ID:",r),e.source.postMessage({type:"RspOrgID",orgId:r},e.origin)}}else n.debug("[inj] Untrusted iframe origin:",e.origin)}))):n.debug("[inj] hostname not match")})();