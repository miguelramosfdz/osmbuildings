(function(m){function J(p,y){var C=p[0]-y[0],f=p[1]-y[1];return C*C+f*f}function L(p){for(var y=0,C=0,f=0,h=p.length-3;f<h;f+=2){y+=p[f];C+=p[f+1]}p=(p.length-2)*2;return[y/p<<0,C/p<<0]}function za(p){var y=p.length/2,C=new Va(y),f=0,h=y-1,j,u,z,E,K=[],Z=[],H=[];for(C[f]=C[h]=1;h;){u=0;for(j=f+1;j<h;j++){z=p[j*2];var Aa=p[j*2+1],aa=p[f*2],F=p[f*2+1],ja=p[h*2],fa=p[h*2+1],A=ja-aa,x=fa-F,M=void 0;if(A!==0||x!==0){M=((z-aa)*A+(Aa-F)*x)/(A*A+x*x);if(M>1){aa=ja;F=fa}else if(M>0){aa+=A*M;F+=x*M}}A=z-aa;
x=Aa-F;z=A*A+x*x;if(z>u){E=j;u=z}}if(u>2){C[E]=1;K.push(f);Z.push(E);K.push(E);Z.push(h)}f=K.pop();h=Z.pop()}for(j=0;j<y;j++)C[j]&&H.push(p[j*2],p[j*2+1]);return H}var Wa=Wa||Array,Va=Va||Array,U=Math,db=U.exp,eb=U.log,P=U.sin,ba=U.cos,Ba=U.tan,Xa=U.asin,fb=U.atan,Ya=U.atan2,na=U.min,Na=U.max,Oa=m.document,Q=function(){function p(f,h,j){if(j<0)j+=1;if(j>1)j-=1;if(j<1/6)return f+(h-f)*6*j;if(j<0.5)return h;if(j<2/3)return f+(h-f)*(2/3-j)*6;return f}function y(f,h,j,u){this.r=f;this.g=h;this.b=j;this.a=
arguments.length<4?1:u}var C=y.prototype;C.toString=function(){return"rgba("+[this.r<<0,this.g<<0,this.b<<0,this.a.toFixed(2)].join(",")+")"};C.adjustLightness=function(f){var h=Q.toHSLA(this);h.l*=f;h.l=Math.min(1,Math.max(0,h.l));var j,u;if(h.s===0)f=j=u=h.l;else{u=h.l<0.5?h.l*(1+h.s):h.l+h.s-h.l*h.s;var z=2*h.l-u;f=p(z,u,h.h+1/3);j=p(z,u,h.h);u=p(z,u,h.h-1/3)}return new Q(f*255<<0,j*255<<0,u*255<<0,h.a)};C.adjustAlpha=function(f){return new Q(this.r,this.g,this.b,this.a*f)};y.parse=function(f){f+=
"";if(~f.indexOf("#")){f=f.match(/^#?(\w{2})(\w{2})(\w{2})(\w{2})?$/);return new Q(parseInt(f[1],16),parseInt(f[2],16),parseInt(f[3],16),f[4]?parseInt(f[4],16)/255:1)}if(f=f.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/))return new Q(parseInt(f[1],10),parseInt(f[2],10),parseInt(f[3],10),f[4]?parseFloat(f[5],10):1)};y.toHSLA=function(f){var h=f.r/255,j=f.g/255,u=f.b/255,z=Math.max(h,j,u),E=Math.min(h,j,u),K,Z=(z+E)/2,H;if(z===E)K=E=0;else{H=z-E;E=Z>0.5?H/(2-z-E):H/(z+E);switch(z){case h:K=(j-
u)/H+(j<u?6:0);break;case j:K=(u-h)/H+2;break;case u:K=(h-j)/H+4;break}K/=6}return{h:K,s:E,l:Z,a:f.a}};return y}(),ga=Math.PI,Za=ga/2,gb=ga/4,N=180/ga,hb=256,Pa=14,oa="latitude",pa="longitude",V=0,O=1,R=2,ca=3,Ca=4,qa=5,$=6;m.OSMBuildings=function(p){function y(a,c){var b={};a/=ra;c/=ra;b[oa]=c<=0?90:c>=1?-90:N*(2*fb(db(ga*(1-2*c)))-Za);b[pa]=(a===1?1:(a%1+1)%1)*360-180;return b}function C(a,c){return a.replace(/\{ *([\w_]+) *\}/g,function(b,d){return c[d]})}function f(a,c,b,d,e){a=na(Na(a,c),b);
return na(Na(d+(a-c)/(b-c)*(e-d),d),e)}function h(a,c){var b=new XMLHttpRequest;b.onreadystatechange=function(){if(b.readyState===4)!b.status||b.status<200||b.status>299||b.responseText&&c(JSON.parse(b.responseText))};b.open("GET",a);b.send(null);return b}function j(){if(!(!Qa||S<Pa)){var a=y(W-M,X-Da),c=y(W+A+M,X+x+Da);Ea&&Ea.abort();Ea=h(C(Qa,{w:a[pa],n:a[oa],e:c[pa],s:c[oa],z:S}),u)}}function u(a){var c,b,d,e=[],g,i=g=0;Fa=Pa;H(S);Ea=null;if(!(!a||a.meta.z!==S)){d=a.meta;b=a.data;if(D&&B&&D.z===
d.z){g=D.x-d.x;i=D.y-d.y;a=0;for(c=B.length;a<c;a++)e[a]=B[a][R][0]+g+","+(B[a][R][1]+i)}D=d;B=[];a=0;for(c=b.length;a<c;a++){d=[];if(!(b[a][O]>sa)){g=za(b[a][R]);if(!(g.length<8)){d[R]=g;d[Ca]=L(g);d[V]=na(b[a][V],sa);d[O]=b[a][O];g=d[R][0]+","+d[R][1];d[qa]=!(e&&~e.indexOf(g));d[ca]=[];d[$]=[];B.push(d)}}}aa()}}function z(a,c){var b=[],d,e,g,i,k,l,o,v,q,t=Ra-S;d=0;for(e=a.length;d<e;d++){k=a[d];v=k[O]>>t;if(!(v>sa)){l=k[R];q=new Wa(l.length);g=0;for(i=l.length-1;g<i;g+=2){o=l[g+1];var r=na(1,Na(0,
0.5-eb(Ba(gb+Za*l[g]/180))/ga/2));o={x:(o/360+0.5)*ra<<0,y:r*ra<<0};q[g]=o.x;q[g+1]=o.y}q=za(q);if(!(q.length<8)){i=[];i[R]=q;i[Ca]=L(q);i[V]=na(k[V]>>t,sa);i[O]=v;i[qa]=c;i[ca]=k[ca];i[$]=[];for(g=0;g<3;g++)if(i[ca][g])i[$][g]=i[ca][g].adjustAlpha(T)+"";b.push(i)}}}return b}function E(a,c){if(typeof a==="object")Z(a,!c);else{var b=Oa.documentElement,d=Oa.createElement("script");m.jsonpCallback=function(e){delete m.jsonpCallback;b.removeChild(d);Z(e,!c)};b.insertBefore(d,b.lastChild).src=a.replace(/\{callback\}/,
"jsonpCallback")}}function K(a,c,b){if(b===undefined)b=[];var d,e,g,i=a[0]?a:a.features,k,l,o,v,q,t=c?1:0,r=c?0:1;if(i){d=0;for(a=i.length;d<a;d++)K(i[d],c,b);return b}if(a.type==="Feature"){k=a.geometry;d=a.properties}if(k.type==="Polygon")l=[k.coordinates];if(k.type==="MultiPolygon")l=k.coordinates;if(l){c=d.height;if(d.color||d.wallColor)v=Q.parse(d.color||d.wallColor);if(d.roofColor)q=Q.parse(d.roofColor);d=0;for(a=l.length;d<a;d++){i=l[d][0];o=[];e=k=0;for(g=i.length;e<g;e++){o.push(i[e][t],
i[e][r]);k+=c||i[e][2]||0}if(k){e=[];g=R;var s=void 0,w=void 0,I=void 0,ka=void 0,ta=0,Y=void 0,$a=void 0;Y=0;for($a=o.length-3;Y<$a;Y+=2){s=o[Y];w=o[Y+1];I=o[Y+2];ka=o[Y+3];ta+=s*ka-I*w}if((ta/2>0?"CW":"CCW")==="CW")o=o;else{s=[];for(w=o.length-2;w>=0;w-=2)s.push(o[w],o[w+1]);o=s}e[g]=o;e[V]=k/i.length<<0;e[ca]=[v||null,v?v.adjustLightness(0.8):null,q?q:v?v.adjustLightness(1.2):ha];b.push(e)}}}return b}function Z(a,c){if(a){ua=K(a,c);Fa=0;H(S);D={n:90,w:-180,s:-90,e:180,x:0,y:0,z:S};B=z(ua,true);
aa()}else{ua=null;F()}}function H(a){var c,b,d;S=a;ra=hb<<S;T=1-f(S,Fa,Ra,0,0.3);Ga=da.adjustAlpha(T)+"";Ha=Ia.adjustAlpha(T)+"";Ja=ha.adjustAlpha(T)+"";Ka=La.adjustAlpha(T)+"";if(B){a=0;for(c=B.length;a<c;a++){d=B[a];d[$]=[];for(b=0;b<3;b++)if(d[ca][b])d[$][b]=d[ca][b].adjustAlpha(T)+""}}}function Aa(){var a,c,b,d,e,g,i,k,l=W-D.x,o=X-D.y,v,q,t,r,s,w,I=[];n.fillStyle=Ka;a=0;for(c=B.length;a<c;a++){e=B[a];q=false;g=e[R];v=[];b=0;for(d=g.length-1;b<d;b+=2){v[b]=i=g[b]-l;v[b+1]=k=g[b+1]-o;q||(q=i>0&&
i<A&&k>0&&k<x)}if(q){g=e[V];if(e[O])g=e[O];i=null;n.beginPath();b=0;for(d=v.length-3;b<d;b+=2){k=v[b];t=v[b+1];q=v[b+2];r=v[b+3];s={x:k+va*g,y:t+wa*g};w={x:q+va*g,y:r+wa*g};if(e[O]){t={x:k+va*g,y:t+wa*g};r={x:q+va*g,y:r+wa*g};k=t.x;t=t.y;q=r.x;r=r.y}if((q-k)*(s.y-t)>(s.x-k)*(r-t)){i===1&&n.lineTo(k,t);i=0;b||n.moveTo(k,t);n.lineTo(q,r)}else{i===0&&n.lineTo(s.x,s.y);i=1;b||n.moveTo(s.x,s.y);n.lineTo(w.x,w.y)}}n.closePath();n.fill();I.push(v)}}n.fillStyle=Ga;a=0;for(c=I.length;a<c;a++)ja(I[a]);a=n.getImageData(0,
0,A,x);c=a.data;b=Ma*255<<0;l=0;for(o=c.length;l<o;l+=4){d=c[l+0];e=c[l+3];if(d&&e>=255)c[l+3]=0;else if(e>b)c[l+3]=b}n.putImageData(a,0,0);ea=new Image;ea.src=G.toDataURL()}function aa(){la=0;ea=null;clearInterval(Sa);Sa=setInterval(function(){la+=0.1;if(la>1){clearInterval(Sa);la=1;for(var a=0,c=B.length;a<c;a++)B[a][qa]=0}F()},33)}function F(){n.clearRect(0,0,A,x);if(D&&B)if(!(S<Fa||Ta)){if(Ua&&ia>-1)if(ea)n.drawImage(ea,ab-W,bb-X);else{Aa();ab=W;bb=X}var a,c,b,d,e,g,i,k,l,o=W-D.x,v=X-D.y,q=[xa+
o,ya+v],t,r,s,w,I,ka;B.sort(function(ta,Y){return J(Y[Ca],q)/Y[V]-J(ta[Ca],q)/ta[V]});a=0;for(c=B.length;a<c;a++){e=B[a];r=false;g=e[R];t=[];b=0;for(d=g.length-1;b<d;b+=2){t[b]=k=g[b]-o;t[b+1]=l=g[b+1]-v;r||(r=k>0&&k<A&&l>0&&l<x)}if(r){b=e[qa]?e[V]*la:e[V];g=ma/(ma-b);if(e[O]){b=e[qa]?e[O]*la:e[O];i=ma/(ma-b)}k=[];b=0;for(d=t.length-3;b<d;b+=2){l=t[b];s=t[b+1];r=t[b+2];w=t[b+3];I=fa(l,s,g);ka=fa(r,w,g);if(e[O]){s=fa(l,s,i);w=fa(r,w,i);l=s.x;s=s.y;r=w.x;w=w.y}if((r-l)*(I.y-s)>(I.x-l)*(w-s)){n.fillStyle=
l<r&&s<w||l>r&&s>w?e[$][1]||Ha:e[$][0]||Ga;ja([r,w,l,s,I.x,I.y,ka.x,ka.y])}k[b]=I.x;k[b+1]=I.y}n.fillStyle=e[$][2]||Ja;n.strokeStyle=e[$][1]||Ha;ja(k,true)}}if(Ua&&ia===-1){n.fillStyle=Ka;n.fillRect(0,0,A,x)}}}function ja(a,c){if(a.length){n.beginPath();n.moveTo(a[0],a[1]);for(var b=2,d=a.length;b<d;b+=2)n.lineTo(a[b],a[b+1]);n.closePath();c&&n.stroke();n.fill()}}function fa(a,c,b){return{x:(a-xa)*b+xa<<0,y:(c-ya)*b+ya<<0}}var A=0,x=0,M=0,Da=0,W=0,X=0,S,ra,Ea,G,n,Qa,da=new Q(200,190,180),Ia=da.adjustLightness(0.8),
ha=da.adjustLightness(1.2),La=new Q(0,0,0),Ga=da+"",Ha=Ia+"",Ja=ha+"",Ka=La+"",Ua=true,ua,D,B,la=1,Sa,T=1,Fa=Pa,Ra=20,sa,xa,ya,ma,Ta,ab,bb,ea,Ma=1,ia=-1,va=0,wa=0,ib=357.5291/N,jb=0.98560028/N,kb=1.9148/N,lb=0.02/N,mb=3.0E-4/N,nb=102.9372/N,cb=23.45/N,ob=280.16/N,pb=360.9856235/N;this.setStyle=function(a){a=(a=a)||{};if(a.color||a.wallColor){da=Q.parse(a.color||a.wallColor);Ga=da.adjustAlpha(T)+"";Ia=da.adjustLightness(0.8);Ha=Ia.adjustAlpha(T)+"";ha=da.adjustLightness(1.2);Ja=ha.adjustAlpha(T)+""}if(a.roofColor){ha=
Q.parse(a.roofColor);Ja=ha.adjustAlpha(T)+""}if(a.shadows!==undefined)Ua=!!a.shadows;F();return this};this.geoJSON=function(a,c){E(a,c);return this};this.setCamOffset=function(a,c){xa=M+a;ya=x+c};this.setMaxZoom=function(a){Ra=a};this.createCanvas=function(a){G=Oa.createElement("CANVAS");G.style.webkitTransform="translate3d(0,0,0)";G.style.imageRendering="optimizeSpeed";G.style.position="absolute";G.style.pointerEvents="none";G.style.left=0;G.style.top=0;a.appendChild(G);n=G.getContext("2d");n.lineCap=
"round";n.lineJoin="round";n.lineWidth=1;try{n.mozImageSmoothingEnabled=false}catch(c){}return G};this.destroyCanvas=function(){G.parentNode.removeChild(G)};this.loadData=j;this.onMoveEnd=function(){var a=y(W,X),c=y(W+A,X+x);ea=null;F();if(D&&(a[oa]>D.n||a[pa]<D.w||c[oa]<D.s||c[pa]>D.e))j()};this.onZoomEnd=function(a){Ta=false;H(a.zoom);if(ua){B=z(ua);ea=null;F()}else{F();j()}};this.onZoomStart=function(){Ta=true;F()};this.render=F;this.setOrigin=function(a,c){W=a;X=c};this.setSize=function(a,c){A=
<<<<<<< HEAD
a;x=c;M=A/2<<0;Da=x/2<<0;xa=M;ya=x;ma=A/1.5/Ba(45)<<0;G.width=A;G.height=x;sa=ma-50};this.setZoom=H;this.setDate=function(a){var c,b;if(a){c=y(W+M,X+Da);b=-c.longitude/N;c=c.latitude/N;a=a.valueOf()/864E5-0.5+2440588;var d=ib+jb*(a-2451545),e=kb*P(d)+lb*P(2*d)+mb*P(3*d);e=d+nb+e+ga;d=Xa(P(e)*P(cb));e=Ya(P(e)*ba(cb),ba(e));b=ob+pb*(a-2451545)-b-e;b={altitude:Xa(P(c)*P(d)+ba(c)*ba(d)*ba(b)),azimuth:Ya(P(b),ba(b)*P(c)-Ba(d)*ba(c))-ga/2};if(b.altitude<=0){ia=-1;Ma=f(-b.altitude,0,1,0.1,0.8)}else{ia=1/
Ba(b.altitude);Ma=0.4/ia;va=ba(b.azimuth)*ia;wa=P(b.azimuth)*ia}La.a=Ma;Ka=La+"";ea=null;F()}};Qa=p};m.OSMBuildings.VERSION="0.1.7a";m.OSMBuildings.ATTRIBUTION='&copy; <a href="http://osmbuildings.org">OSM Buildings</a>'})(this);
=======
a;x=c;M=A/2<<0;Da=x/2<<0;xa=M;ya=x;ma=A/1.5/Ba(45)<<0;G.width=A;G.height=x;sa=ma-50};this.setZoom=H;this.setDate=function(a){var c,b;if(a){c=y(W+M,X+Da);b=-c.longitude/N;c=c.latitude/N;a=a.valueOf()/864E5-0.5+2440588;var d=ib+jb*(a-2451545),e=kb*P(d)+lb*P(2*d)+mb*P(3*d);e=d+nb+e+ga;d=Wa(P(e)*P(cb));e=Xa(P(e)*ba(cb),ba(e));b=ob+pb*(a-2451545)-b-e;b={altitude:Wa(P(c)*P(d)+ba(c)*ba(d)*ba(b)),azimuth:Xa(P(b),ba(b)*P(c)-Ba(d)*ba(c))-ga/2};if(b.altitude<=0){la=-1;Ma=f(-b.altitude,0,1,0.1,0.8)}else{la=1/
Ba(b.altitude);Ma=0.4/la;va=ba(b.azimuth)*la;wa=P(b.azimuth)*la}La.a=Ma;Ka=La+"";ea=null;F()}};Qa=p};m.OSMBuildings.VERSION="0.1.8a";m.OSMBuildings.ATTRIBUTION='&copy; <a href="http://osmbuildings.org">OSM Buildings</a>'})(this);
>>>>>>> master
OpenLayers.Layer.Buildings=OpenLayers.Class(OpenLayers.Layer,{CLASS_NAME:"OpenLayers.Layer.Buildings",name:"OSM Buildings",attribution:OSMBuildings.ATTRIBUTION,isBaseLayer:false,alwaysInRange:true,dxSum:0,dySum:0,initialize:function(m){m=m||{};m.projection="EPSG:900913";OpenLayers.Layer.prototype.initialize(this.name,m)},setOrigin:function(){var m=this.map.getLonLatFromPixel(new OpenLayers.Pixel(0,0)),J=this.map.resolution,L=this.maxExtent;this.osmb.setOrigin(Math.round((m.lon-L.left)/J),Math.round((L.top-
m.lat)/J))},setMap:function(m){if(!this.map){OpenLayers.Layer.prototype.setMap(m);this.osmb=new OSMBuildings(this.options.url);this.osmb.createCanvas(this.div);this.osmb.setSize(this.map.size.w,this.map.size.h);this.osmb.setZoom(this.map.zoom);this.setOrigin();this.osmb.loadData()}},removeMap:function(m){this.osmb.destroyCanvas();this.osmb=null;OpenLayers.Layer.prototype.removeMap(m)},onMapResize:function(){OpenLayers.Layer.prototype.onMapResize();this.osmb.onResize({width:this.map.size.w,height:this.map.size.h})},
moveTo:function(m,J,L){m=OpenLayers.Layer.prototype.moveTo(m,J,L);if(!L){L=parseInt(this.map.layerContainerDiv.style.left,10);var za=parseInt(this.map.layerContainerDiv.style.top,10);this.div.style.left=-L+"px";this.div.style.top=-za+"px"}this.setOrigin();this.dySum=this.dxSum=0;this.osmb.setCamOffset(this.dxSum,this.dySum);J?this.osmb.onZoomEnd({zoom:this.map.zoom}):this.osmb.onMoveEnd();return m},moveByPx:function(m,J){this.dxSum+=m;this.dySum+=J;var L=OpenLayers.Layer.prototype.moveByPx(m,J);this.osmb.setCamOffset(this.dxSum,
this.dySum);this.osmb.render();return L},geoJSON:function(m,J){return this.osmb.geoJSON(m,J)},setStyle:function(m){return this.osmb.setStyle(m)},setDate:function(m){return this.osmb.setDate(m)}});
