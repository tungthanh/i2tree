(function(T,p,i){function M(a){this.name="JsRender Error";this.message=a||"JsRender error"}function U(a,c,b){if(!o.rTag||arguments.length)y=a?"\\"+a.charAt(0):y,v=a?"\\"+a.charAt(1):v,w=c?"\\"+c.charAt(0):w,r=c?"\\"+c.charAt(0):r,b=b?"\\"+b:V,o.rTag=z="(\\w*"+b+")?(?:(?:(\\w+(?=[\\/\\s"+w+"]))|(?:(\\w+)?(:)|(>)|(\\*)))\\s*((?:[^"+w+"]|"+w+"(?!"+r+"))*?)",z=RegExp(y+v+z+"(\\/)?|(?:\\/(\\w+)))"+w+r,"g"),W=RegExp("<.*>|([^\\\\]|^)[{}]|"+y+v+".*"+w+r);return[y,v,w,r,V]}function ba(a){var c=this,b=c.tmpl.helpers||
{},a=(c.dynCtx&&c.dynCtx[a]!==i?c.dynCtx:c.ctx[a]!==i?c.ctx:b[a]!==i?b:x[a]!==i?x:{})[a];return"function"!==typeof a?a:function(){return a.apply(c,arguments)}}function ca(a,c,b,d){var b=!b.markup&&b||i,f=c.tmpl.converters;return(f=f&&f[a]||I[a])?f.call(c,d,b):(t("Unknown converter: {{"+a+":"),d)}function da(a,c,b,d,f){var e,j=!b.markup&&b,m=j?j.view.tmpl:b,k=m.tags,l=m.templates,h=f.props=f.props||{},g=h.tmpl,A=5<arguments.length?ea.call(arguments,5):[],k=k&&k[a]||J[a];if(!k)return t("Unknown tag: {{"+
a+"}}"),"";d=d&&m.tmpls[d-1];g=g||d||k.template||i;f.view=c;g=f.tmpl=""+g===g?l&&l[g]||s[g]||s(g):g;f.attr=b.attr=b.attr||k.attr;f.tagName=a;f.renderContent=N;j&&(j.tagCtx={args:A,props:h,path:f.path,tag:k});k.render&&(e=k.render.apply(f,A));return e||(e==i?g?f.renderContent(A[0],i,c):"":e.toString())}function K(a,c,b,d,f,e,j,m){f={data:d,tmpl:f,views:m?[]:{},parent:b,ctx:a,path:c,_useKey:m?0:1,_onRender:j,_hlp:ba,renderLink:function(b){return this.tmpl.tmpls[b].render(d,a,this)}};b&&(c=b.views,b._useKey?
(c[f.key="_"+b._useKey++]=f,f.index=b.index):c.splice(f.key=f.index=e!==i?e:c.length,0,f));return f}function L(a,c,b,d,f){var e;if(b&&"object"===typeof b&&!b.nodeType){for(e in b)c(e,b[e]);return a}d===i&&(d=b,b=i);if(a=O.onBeforeStoreItem)f=a(c,b,d,f)||f;b?""+b===b&&(null===d?delete c[b]:c[b]=f?d=f(d,b):d):d=f?f(d):d;(a=O.onStoreItem)&&a(c,b,d,f);return d}function X(a,c){a="function"===typeof a?{render:a}:a;a.name=c;a.is="tag";return a}function s(a,c){return L(this,s,a,c,P)}function J(a,c){return L(this,
J,a,c,X)}function x(a,c){return L(this,x,a,c)}function I(a,c){return L(this,I,a,c)}function N(a,c,b,d,f,e,j){var m,k,l,h,g,A,F="";d===u&&(k=u,d=0);if(this.tagName){h=this.tmpl;if(c||this.ctx)l={},this.ctx&&n(l,this.ctx),c&&n(l,c);c=l;if((g=this.props)&&g.link===C)c=c||{},c.link=C;b=b||this.view;e=e||this.path;d=d||this.key;j=b&&b._onRender}else h=this.jquery&&(this[0]||t('Unknown template: "'+this.selector+'"'))||this,j=j||b&&b._onRender;if(h){b?(l=b.ctx,m=b.dynCtx,a===b&&(a=b.data,f=u)):l=x;A=c&&
c!==l;if(m||A)l=n({},l),A&&n(l,c),m&&n(l,m);c=l;h.fn||(h=s[h]||s(h));if(h){j=c.link!==C&&j;if(q.isArray(a)&&!f){k=k?b:d!==i&&b||K(c,e,b,a,h,d,j,u);b=0;for(f=a.length;b<f;b++)m=a[b],m=h.fn(m,K(c,e,k,m,h,(d||0)+b,j),o),F+=j?j(m,h,g):m}else k=k?b:K(c,e,b,a,h,d,j),k._onRender=j,F+=h.fn(a,k,o,fa);return j?j(F,h,g,k.key,e):F}}t("No template found");return""}function fa(a){return a}function t(a){if(o.debugMode)throw new o.Error(a);}function H(a){t("Syntax error\n"+a)}function Y(a,c,b){function d(b){(b-=
k)&&h.push(a.substr(k,b).replace(ga,"\\n"))}function f(b){b&&H('Unmatched or missing tag: "{{/'+b+'}}" in template:\n'+a)}var e,j=c&&c.allowCode,m=[],k=0,l=[],h=m,g=[,,,m],a=a.replace(ha,"\\$1");f(l[0]&&l[0][3].pop()[0]);a.replace(z,function(c,m,i,n,q,o,s,D,w,p,B){o&&(q=":",n="html");var t="",r="",o=!w&&!q&&!b,i=i||q;d(B);k=B+c.length;if(s)j&&h.push(["*",D.replace(ia,"$1")]);else if(i){"else"===i?(g[5]=a.substring(g[5],B),g=l.pop(),h=g[3],o=u):m&&(l.push(g),g=["!",,,[],,B],h.push(g),h=g[3]);if(D)var G=
D,y,v={},E=0,x=C,z=C,G=(G+" ").replace(ja,function(a,c,d,e,f,g,j,k,h,l,i,n,o,t,q,p){function A(a,b,c,d,e,f,g){if(b){b=(c?'view._hlp("'+c+'")':d?"view":"data")+(g?(e?"."+e:c?"":d?"":"."+b)+(f||""):(g=c?"":d?e||"":b,""));a=g?"."+g:"";r||(b=b+a);b=b.slice(0,9)==="view.data"?b.slice(5):b;r&&(b="b("+b+',"'+g+'")'+a);return b}return a}var d=d||c||i,e=e||k,h=h||q||"",f=f||""||"",r=(b||m)&&h!=="(";if(g)H(G);else return z?(z=!n,z?a:'"'):x?(x=!o,x?a:'"'):(d?(E++,d):"")+(p?E?"":y?(y=C,"\b"):",":j?(E&&H(G),y=
u,"\b"+e+":"):e?e.replace(ka,A)+(h?(v[++E]=u,h):f):f?f:t?(v[E--]=C,t)+(h?(v[++E]=u,h):""):l?(v[E]||H(G),","):c?"":(z=n,x=o,'"'))}),B=G.replace(la,function(a,b,c){b?r=r+(c+","):t=t+(c+",");return""});else B="";D=B;t=t.slice(0,-1);D=D.slice(0,-1);e=[i,n||"",D,o&&[],"{"+(t?"props:{"+t+"},":"")+"data: data"+(r?",ctx:{"+r.slice(0,-1)+"}":"")+"}"];h.push(e);o?(l.push(g),g=e,g[5]=k):m&&(g[5]=a.substring(g[5],k),g=l.pop())}else p&&(i=g[0],f(p!==i&&!("if"===p&&"else"===i)&&i),g[5]=a.substring(g[5],B),"!"===
i&&(g[5]=a.substring(g[5],k),g=l.pop()),g=l.pop());f(!g&&p);h=g[3]});d(a.length);return Q(m,c)}function Q(a,c){var b,d,f,e,j,m,k,l,h,g,i,n,o,q,p,r=c?{allowCode:q=c.allowCode,debug:c.debug}:{},s=c&&c.tmpls;e=(f=a.length)?"":'"";';for(d=0;d<f;d++)b=a[d],""+b===b?e+='"'+b+'"+':(g=b[0],"*"===g?e=e.slice(0,d?-1:-3)+";"+b[1]+(d+1<f?"ret+=":""):(i=b[1],n=b[2],p=b[3],o=b[4],markup=b[5],"!"===g.slice(-1)?(b=R(markup,r,c,s.length),Q(p,b),(g=/\s+[\w-]*\s*\=\s*\\['"]$/.exec(a[d-1]))&&t("'{{!' in attribute:\n..."+
a[d-1]+"{{!...\nUse data-link"),e+="view.renderLink("+s.length+")+",b.bound=u,b.fn.attr=g||"leaf",s.push(b)):(p&&(b=R(markup,r,c,s.length),Q(p,b),s.push(b)),h=h||-1<o.indexOf("view"),e+=(":"===g?"html"===i?(m=u,"h("+n):i?(l=u,'c("'+i+'",view,this,'+n):(k=u,"((v="+n+')!=u?v:""'):(j=u,'t("'+g+'",view,this,'+(p?s.length:'""')+","+o+(n?",":"")+n))+")+")));e=ma+(k?"v,":"")+(j?"t=j._tag,":"")+(l?"c=j._convert,":"")+(m?"h=j.converters.html,":"")+"ret; try{\n\n"+(r.debug?"debugger;":"")+(q?"ret=":"return ")+
e.slice(0,-1)+";\n\n"+(q?"return ret;":"")+"}catch(e){return j._err(e);}";try{e=new Function("data, view, j, b, u",e)}catch(v){H("Compiled template code:\n\n"+e,v)}c&&(c.fn=e);return e}function Z(a,c,b){var d,f;if(a)for(d in a)f=a[d],f.is||(a[d]=c(f,d,b))}function P(a,c,b,d){function f(a){if(""+a===a||0<a.nodeType){try{j=0<a.nodeType?a:!W.test(a)&&p&&p(a)[0]}catch(e){}j&&(a=s[j.getAttribute($)],a||(c=c||"_"+na++,j.setAttribute($,c),a=P(j.innerHTML,c,b,d),s[c]=a));return a}}var e,j,a=a||"";e=f(a);
d=d||(a.markup?a:{});d.name=c;d.is="tmpl";if(!e&&a.markup&&(e=f(a.markup)))if(e.fn&&(e.debug!==a.debug||e.allowCode!==a.allowCode))e=e.markup;if(e!==i)return c&&!b&&(S[c]=function(){return a.render.apply(a,arguments)}),e.fn||a.fn?e.fn&&(a=c&&c!==e.name?n(n({},e),d):e):(a=R(e,d,b,0),Y(e,a)),Z(d.templates,P,a),Z(d.tags,X),a}function R(a,c,b,d){function f(a){b[a]&&(e[a]=n(n({},b[a]),c[a]))}var c=c||{},e={markup:a,tmpls:[],links:[],render:N};b&&(b.templates&&(e.templates=n(n({},b.templates),c.templates)),
e.parent=b,e.name=b.name+"["+d+"]",e.key=d);n(e,c);b&&(f("templates"),f("tags"),f("helpers"),f("converters"));return e}function oa(a){return aa[a]||(aa[a]="&#"+a.charCodeAt(0)+";")}if(!(p&&p.views||T.jsviews)){var q,z,W,n,y="{",v="{",w="}",r="}",V="!",O={},C=!1,u=!0,ka=/^(?:null|true|false|\d[\d.]*|([\w$]+|~([\w$]+)|#(view|([\w$]+))?)([\w$.]*?)(?:[.[]([\w$]+)\]?)?|(['"]).*\8)$/g,ja=/(\()(?=|\s*\()|(?:([([])\s*)?(?:([#~]?[\w$.]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*!:?\/]|(=))\s*|([#~]?[\w$.]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*([)\]])([([]?))|(\s+)/g,
ga=/\r?\n/g,ia=/\\(['"])/g,ha=/\\?(['"])/g,la=/\x08(~)?([^\x08]+)\x08/g,na=0,aa={"&":"&amp;","<":"&lt;",">":"&gt;"},$="data-jsv-tmpl",ma="var j=j||"+(p?"jQuery.":"js")+"views,",pa=/[\x00"&'<>]/g,ea=Array.prototype.slice,S={},o={jsviews:"v1.0pre",sub:O,debugMode:u,render:S,templates:s,tags:J,helpers:x,converters:I,delimiters:U,View:K,_convert:ca,_err:function(a){return o.debugMode?"Error: "+(a.message||a)+". ":""},_tmplFn:Y,_tag:da,error:t,Error:M};(M.prototype=Error()).constructor=M;p?(q=p,q.templates=
s,q.render=S,q.views=o,q.fn.render=N):(q=T.jsviews=o,q.extend=function(a,c){var b,a=a||{};for(b in c)a[b]=c[b];return a},q.isArray=Array&&Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)});n=q.extend;J({"if":function(){var a=this.view;a.onElse=function(c,b){for(var d=0,f=b.length;f&&!b[d++];)if(d===f)return"";a.onElse=i;c.path="";return c.renderContent(a)};return a.onElse(this,arguments)},"else":function(){var a=this.view;return a.onElse?a.onElse(this,arguments):
""},"for":function(){var a,c="",b=arguments,d=b.length;d===0&&(d=1);for(a=0;a<d;a++)c=c+this.renderContent(b[a]);return c},"*":function(a){return a}});I({html:function(a){return a!=i?String(a).replace(pa,oa):""}});U()}})(this,this.jQuery);