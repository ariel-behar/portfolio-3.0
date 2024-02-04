"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[279],{279:function(i,n,e){e.r(n),e.d(n,{default:function(){return w}});var t,r=e(885),l=e(168),o=e(2791),c=e(4261),s=JSON.parse('[{"skill":"React","proficiency":1,"image":"react.png","displaySkill":true},{"skill":"Node","proficiency":1,"image":"node.png","displaySkill":true},{"skill":"Express","proficiency":1,"image":"express.png","displaySkill":true},{"skill":"HTML","proficiency":1,"image":"html.png","displaySkill":true},{"skill":"CSS","proficiency":1,"image":"css.png","displaySkill":true},{"skill":"Sass","proficiency":1,"image":"sass.png","displaySkill":true},{"skill":"Tailwind","proficiency":1,"image":"tailwind.png","displaySkill":true},{"skill":"Material UI","proficiency":1,"image":"materialui.png","displaySkill":true},{"skill":"Bootstrap","proficiency":1,"image":"bootstrap.jpg","displaySkill":true},{"skill":"MDBootstrap","proficiency":1,"image":"mdbootstrap.jpg","displaySkill":true},{"skill":"Javascript","proficiency":1,"image":"javascript.png","displaySkill":true},{"skill":"jQuery","proficiency":1,"image":"jquery.png","displaySkill":true},{"skill":"Wordpress","proficiency":1,"image":"wordpress.png","displaySkill":true},{"skill":"Git","proficiency":1,"image":"git.png","displaySkill":true},{"skill":"MongoDB","proficiency":1,"image":"mongodb.png","displaySkill":true},{"skill":"Photoshop","proficiency":1,"image":"photoshop.png","displaySkill":true},{"skill":"Three JS","proficiency":2,"image":"three-js.png","displaySkill":true},{"skill":"R3F","proficiency":2,"image":"react-three-fiber.png","displaySkill":true},{"skill":"TypeScript","proficiency":2,"image":"typescript.png","displaySkill":true},{"skill":"Shopify","proficiency":2,"image":"shopify.png","displaySkill":true},{"skill":"Liquid","proficiency":2,"image":"liquid.png","displaySkill":true},{"skill":"Blender","proficiency":3,"image":"blender.png","displaySkill":true},{"skill":"Illustrator","proficiency":3,"image":"illustrator.png","displaySkill":true},{"skill":"Premiere","proficiency":3,"image":"premiere.png","displaySkill":true}]'),a=e(6934),p=e(4554),d=e(1889),u=e(3767),y=e(890),m=e(5172),f=function(i){return 1===i?"custom.chip.green":2===i?"custom.chip.yellow":3===i?"custom.chip.blue":void 0},g=e(184),x=(0,a.ZP)(p.Z)(t||(t=(0,l.Z)(["\n \tmargin: 17px 7px;\n\tcolor: black;\n\ttext-align: center;\n\tfont-size: 17px;\n\tmin-width: 170px;\n    border-radius: 16px;\n\n\timg {\n\t\ttransform: scale(1.5);\n\n\t\tfloat: left;\n\t\tmargin: 0 8px;\n\t\theight: 32px;\n\t\twidth: 32px;\n\t\tborder-radius: 50%;\n\t}\n\n\tp {\n\t\tmargin: 3px 0 0 0;\n\t}\n\n\t@media (max-width: 399px){\n\t\tmin-width: 155px;\n\t}\n"])));var k,h=function(i){var n=i.skill,e=i.hoveredProficiency;return(0,g.jsxs)(x,{sx:{backgroundColor:f(n.proficiency),opacity:e?e===n.proficiency?1:.5:1},children:[(0,g.jsx)("img",{src:"https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/icons/".concat(n.image),alt:"".concat(n.skill," logo")}),(0,g.jsx)(y.Z,{variant:"body1",component:"p",fontWeight:"bold",children:n.skill})]})},v=(0,a.ZP)(p.Z)(k||(k=(0,l.Z)(["\n\twidth: 30px;\n\theight: 30px;\n\tborder-radius: 50%;\n\n\tmargin-top: 5px;\n\tmargin-bottom: 10px;\n"])));var S,b=function(i){var n=i.hoveredProficiency,e=i.skillProficiencyNum,t=i.onMouseEnterProficiencyTitleHandler,r=i.onMouseLeaveProficiencyTitleHandler,l=i.children;return(0,g.jsxs)(u.Z,{direction:"column",alignItems:"center",mx:2,onMouseEnter:function(){return t(e)},onMouseLeave:function(){return r()},sx:{opacity:n?n===e?1:.5:1},children:[(0,g.jsx)(y.Z,{variant:"body1",component:"p",color:"text.secondary",children:l}),(0,g.jsx)(v,{sx:{backgroundColor:f(e)}})]})},j=(0,a.ZP)(m.Z)(S||(S=(0,l.Z)(["\n\tcolor: ",";\n\n\tposition: relative;\n\tanimation: pointDown 1s infinite;\n\n\t@keyframes pointDown {\n\t\t0% {top: 0}\n\t\t50% {top: 3px}\n\t\t100% {top: 0}\n\t}\n"])),(function(i){return i.theme.palette.text.muted.light})),Z=[{title:"PROFICIENT",proficiencyNum:1},{title:"COMPETENT",proficiencyNum:2},{title:"NOVICE",proficiencyNum:3}];var w=function(i){var n=i.loadSectionHandler,e=(0,o.useState)(null),t=(0,r.Z)(e,2),l=t[0],a=t[1];(0,o.useEffect)((function(){n(6)}),[n]);var m=function(i){a(i)},f=function(){a(null)};return(0,g.jsxs)(p.Z,{component:"section",id:"fifth-section",children:[(0,g.jsx)(y.Z,{mt:3,variant:"h2",component:"h3",color:"text.secondary",textAlign:"center",display:{xs:"block",md:"none"},children:"My Abilities"}),(0,g.jsxs)(d.ZP,{container:!0,spacing:{xs:1,lg:5},py:{xs:2,lg:5},children:[(0,g.jsx)(d.ZP,{item:!0,xs:12,sm:12,md:2,textAlign:"center",children:(0,g.jsxs)(u.Z,{pt:{xs:0,lg:3},direction:"column",alignItems:"center",children:[(0,g.jsx)(y.Z,{variant:"body1",component:"p",color:"text.muted.light",display:{xs:"none",lg:"block"},children:"HOVER"}),(0,g.jsx)(j,{sx:{display:{xs:"none",lg:"block"}}}),(0,g.jsx)(u.Z,{direction:{xs:"row",md:"column"},justifyContent:"space-around",mt:{xs:0,md:12,lg:3},children:Z.map((function(i){return(0,g.jsx)(b,{hoveredProficiency:l,skillProficiencyNum:i.proficiencyNum,onMouseEnterProficiencyTitleHandler:m,onMouseLeaveProficiencyTitleHandler:f,children:i.title},(0,c.Z)())}))})]})}),(0,g.jsxs)(d.ZP,{item:!0,xs:12,sm:12,md:10,children:[(0,g.jsx)(y.Z,{mb:2,variant:"h2",component:"h3",color:"text.secondary",textAlign:"center",display:{xs:"none",md:"block"},children:"My Abilities"}),(0,g.jsx)(u.Z,{direction:"row",flexWrap:"wrap",justifyContent:"center",children:s.map((function(i){return!0===i.displaySkill&&(0,g.jsx)(h,{skill:i,hoveredProficiency:l},(0,c.Z)())}))}),(0,g.jsx)(y.Z,{mt:1,variant:"body1",component:"p",color:"text.muted.main",textAlign:"center",children:"*In constant learning of new skills and improvement on already existing ones"})]})]})]})}},5172:function(i,n,e){var t=e(4836);n.Z=void 0;var r=t(e(5649)),l=e(184),o=(0,r.default)((0,l.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");n.Z=o},4261:function(i,n,e){e.d(n,{Z:function(){return p}});var t,r={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},l=new Uint8Array(16);function o(){if(!t&&!(t="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(l)}for(var c=[],s=0;s<256;++s)c.push((s+256).toString(16).slice(1));function a(i){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(c[i[n+0]]+c[i[n+1]]+c[i[n+2]]+c[i[n+3]]+"-"+c[i[n+4]]+c[i[n+5]]+"-"+c[i[n+6]]+c[i[n+7]]+"-"+c[i[n+8]]+c[i[n+9]]+"-"+c[i[n+10]]+c[i[n+11]]+c[i[n+12]]+c[i[n+13]]+c[i[n+14]]+c[i[n+15]]).toLowerCase()}var p=function(i,n,e){if(r.randomUUID&&!n&&!i)return r.randomUUID();var t=(i=i||{}).random||(i.rng||o)();if(t[6]=15&t[6]|64,t[8]=63&t[8]|128,n){e=e||0;for(var l=0;l<16;++l)n[e+l]=t[l];return n}return a(t)}}}]);
//# sourceMappingURL=279.a7a6b654.chunk.js.map