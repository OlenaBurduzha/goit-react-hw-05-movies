(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[900],{576:function(e,t,n){"use strict";n.d(t,{I:function(){return c}});var r=n(7),a=n.n(r),c=function(e,t,n){fetch("".concat("https://api.themoviedb.org/3/","movie/").concat(t,"/").concat(e,"?api_key=").concat("817d33fa7e0ddfc368fbd7439a742f76","&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Enter another name"))})).then((function(e){return n(e)})).catch((function(e){return console.log(e)}))};c.propTypes={value:a().string.isRequired,paramsId:a().string.isRequired,setFoo:a().func.isRequired}},900:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(439),a=n(576),c=n(791),i=n(689),o=n(958),s="Cast_list__GlWio",u="Cast_image__mOsuM",p="Cast_item__a0CDL",f=n(184),l=function(){var e=(0,i.UO)(),t=Number(e.moviesId),n=(0,c.useState)(),l=(0,r.Z)(n,2),m=l[0],d=l[1];return(0,c.useEffect)((function(){(0,a.I)("credits",t,d)}),[]),(0,f.jsx)("section",{children:m&&(0,f.jsx)("ul",{className:s,children:m.cast.map((function(e){return(0,f.jsxs)("li",{className:p,children:[e.profile_path?(0,f.jsx)("img",{className:u,src:"".concat("https://image.tmdb.org/t/p/w500/").concat(e.profile_path),alt:e.original_name}):(0,f.jsx)("img",{className:u,src:o,alt:"No foto"}),(0,f.jsx)("p",{children:e.original_name}),(0,f.jsxs)("p",{children:["Character: ",e.character]})]},e.id)}))})})}},888:function(e,t,n){"use strict";var r=n(47);function a(){}function c(){}c.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,c,i){if(i!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:a};return n.PropTypes=n,n}},7:function(e,t,n){e.exports=n(888)()},47:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},958:function(e,t,n){"use strict";e.exports=n.p+"static/media/img.d25e8d14857edd0cff6b.png"}}]);
//# sourceMappingURL=900.6dc81f48.chunk.js.map