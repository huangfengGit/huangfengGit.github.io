System.register("chunks:///_virtual/battle",["./battleGame.ts","./battleRule.ts","./BattleMainUI.ts"],(function(){"use strict";return{setters:[null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/battleGame.ts",["./rollupPluginModLoBabelHelpers.js","cc","./NRole.ts","./SkillTxt.ts","./NConst.ts","./NGlobal.ts","./NEnum.ts","./WeaponTxt.ts","./index.mjs","./battleRule.ts"],(function(t){"use strict";var e,i,n,l,o,s,r,a,f,h,u,_,p,c,d,m,g,b,k,L,w,y,C,S,v;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,l=t.assertThisInitialized},function(t){o=t.cclegacy,s=t._decorator,r=t.Prefab,a=t.Node,f=t.Label,h=t.sp,u=t.JsonAsset,_=t.Button,p=t.tween,c=t.v3,d=t.randomRangeInt,m=t.Component,g=t.instantiate},function(t){b=t.NRole},function(t){k=t.SkillTxt},function(t){L=t.C_BUNDLE_LIST},function(t){w=t.NGlobal},function(t){y=t.E_CAMP},function(t){C=t.WeaponTxt},function(t){S=t.randomRange},function(t){v=t.C_ROUND_CAMP_LIST}],execute:function(){var I,A,E,x,R,N,D,T,P,z,B,F,K,j,G,M,U,O,H,W,q,J,Q,V,Z,X,Y;o._RF.push({},"d66b0ZPrjlLSL6QhVfqT9F/","battleGame",void 0);var $=s.ccclass,tt=s.property,et=[501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,548,549,550];t("battleGame",(I=$("battleGame"),A=tt(b),E=tt(b),x=tt(r),R=tt([a]),N=tt(a),D=tt(a),T=tt(f),P=tt(f),z=tt(f),B=tt(h.Skeleton),F=tt(u),K=tt(_),I((M=e((G=function(t){function e(){for(var e,i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return e=t.call.apply(t,[this].concat(o))||this,n(e,"role_letf",M,l(e)),n(e,"role_right",U,l(e)),n(e,"pf_skillEff",O,l(e)),n(e,"n_effList",H,l(e)),n(e,"n_skillInfoLeft",W,l(e)),n(e,"n_skillInfoRight",q,l(e)),n(e,"lbl_weapon",J,l(e)),n(e,"lbl_skill",Q,l(e)),n(e,"lbl_time",V,l(e)),n(e,"spn_skillShowEff",Z,l(e)),n(e,"json_weaponSkill",X,l(e)),n(e,"btn_test",Y,l(e)),e._wpIdx=void 0,e._wpList=void 0,e._fireCamp=void 0,e._battleTime=void 0,e._roundIdx=void 0,e._effNum=void 0,e}i(e,t);var o=e.prototype;return o.onLoad=function(){this._battleTime=0,this._wpList=[],this._fireCamp=[],this.role_letf.setCompleteListener(this.roleCompleteListener.bind(this,this.role_letf.spn_body)),this.role_right.setCompleteListener(this.roleCompleteListener.bind(this,this.role_letf.spn_body)),this.spn_skillShowEff.setCompleteListener(this.spnSkillShowEffCompleteListener.bind(this)),this.spn_skillShowEff.timeScale=2},o.start=function(){this.enterBattle(),this.btn_test.node.on(_.EventType.CLICK,this.btn_test_click,this),this._wpIdx=0,this._roundIdx=-1,this.spn_skillShowEff.node.active=!1},o.spnSkillShowEffCompleteListener=function(t){this.spn_skillShowEff.node.active=!1},o.roleCompleteListener=function(t,e){switch(t.getCurrent(0).animation.name){case"hit_1":t.setAnimation(0,"idle_1",!0)}},o.roletEventListener=function(t,e){},o.btn_test_click=function(){},o.enterBattle=function(){var t=this;this.role_letf.changePartColor(w.userData.accountUD.petColorCfg[0].componentConfigList),this.role_letf.setAnimation(0,"run",!0),this.role_letf.node.setPosition(-900,-190,0),p(this.role_letf.node).to(1,{position:c(-450,-190,0)}).call((function(){t.role_letf.setAnimation(0,"idle_1",!0)})).delay(.5).call((function(){t.startFight()})).start(),this.role_right.changePartColor(w.userData.accountUD.petColorCfg[1].componentConfigList),this.role_right.setAnimation(0,"run",!0),this.role_right.node.setPosition(900,-190,0),p(this.role_right.node).to(1,{position:c(450,-190,0)}).call((function(){t.role_right.setAnimation(0,"idle_1",!0)})).start()},o.startFight=function(){for(var t=0;t<9;t++)this._wpList.push(S(0,45));this._fireCamp=v[d(0,v.length)],this.startNextRound()},o.resetRoundData=function(){this._effNum=0,this.role_letf.setAnimation(0,"idle_1",!0),this.role_right.setAnimation(0,"idle_1",!0)},o.startNextRound=function(){if(this._roundIdx++,!(this._roundIdx>=this._wpList.length)){this.resetRoundData();var t=et[this._wpList[this._roundIdx]],e=this._fireCamp[this._roundIdx],i=e==y.LEFT?this.role_letf:this.role_right;this.showSkillInfo(i,t,e)}},o.getLanguageByKey=function(t){if(t){for(var e=t.split("."),i=this.json_weaponSkill.json,n=0;n<e.length;n++)if(!(i=i[e[n]]))return"";return i||""}},o.showSkillInfo=function(t,e,i){var n=this,l=C.getDataByKey(e),o=k.getDataByKey(l.skillId);this.lbl_weapon.string=String(this.getLanguageByKey(l.name)),this.lbl_skill.string=String(this.getLanguageByKey(o.name)),p(this.n_skillInfoRight).to(.3,{position:c(-100,0,0)}).start(),p(this.n_skillInfoLeft).to(.3,{position:c(100,0,0)}).delay(.5).call((function(){n.n_skillInfoLeft.setPosition(-1e3,0),n.n_skillInfoRight.setPosition(1e3,0),n.fireSkill(t,e,i)})).start(),this.spn_skillShowEff.node.active=!0,this.spn_skillShowEff.setAnimation(0,"act_1",!1)},o.fireSkill=function(t,e,i,n){var l=C.getDataByKey(e),o=k.getDataByKey(l.skillId);t.setAnimation(0,o.playerAni,!1),this._effNum=o.effectAnis.length,this.createSkillEffect(t,i,e,o)},o.createSkillEffect=function(t,e,i,n){for(var l=this,o=function(o){var s=n.effectAnis[o];w.AssteMgr.loadResAsync("res/skill/"+i+"/"+i,L.COMMON,h.SkeletonData).then((function(i){var n=g(l.pf_skillEff).getComponent(h.Skeleton);n.skeletonData=i,n.node.setParent(l.n_effList[o]),n.node.setScale(e==y.RIGHT?1:-1,1),n.node.setPosition(t.node.getPosition()),n.setAnimation(0,s,!1),n.setEventListener(l.effAniamEvent.bind(l)),n.setCompleteListener(l.effAnimaComplete.bind(l,n))}))},s=0;s<n.effectAnis.length;s++)o(s)},o.effAniamEvent=function(t,e){"knock"==e.data.name&&(this._fireCamp[this._roundIdx]==y.LEFT?this.role_right:this.role_letf).setAnimation(0,"hit_1",!1)},o.effAnimaComplete=function(t,e){t.node.destroy(),this._effNum--,0==this._effNum&&(this._roundIdx==this._wpList.length-1?this.endBattle():this.startNextRound())},o.endBattle=function(){var t=this._fireCamp[this._roundIdx],e=t==y.LEFT?this.role_letf:this.role_right,i=t==y.LEFT?this.role_right:this.role_letf;e.setAnimation(0,"win",!0),i.setAnimation(0,"die",!1)},e}(m)).prototype,"role_letf",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),U=e(G.prototype,"role_right",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),O=e(G.prototype,"pf_skillEff",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),H=e(G.prototype,"n_effList",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),W=e(G.prototype,"n_skillInfoLeft",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),q=e(G.prototype,"n_skillInfoRight",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),J=e(G.prototype,"lbl_weapon",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Q=e(G.prototype,"lbl_skill",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),V=e(G.prototype,"lbl_time",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Z=e(G.prototype,"spn_skillShowEff",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),X=e(G.prototype,"json_weaponSkill",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Y=e(G.prototype,"btn_test",[K],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),j=G))||j));o._RF.pop()}}}));

System.register("chunks:///_virtual/BattleMainUI.ts",["./rollupPluginModLoBabelHelpers.js","cc","./NGlobal.ts","./NEnum.ts"],(function(t){"use strict";var n,e,o,r,a,i;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy,o=t._decorator,r=t.Component},function(t){a=t.NGlobal},function(t){i=t.E_StageType}],execute:function(){var c;e._RF.push({},"73c26jrb2dG7pNp1SNJkJxa","BattleMainUI",void 0);var u=o.ccclass;o.property,t("BattleMainUI",u("BattleMainUI")(c=function(t){function e(){return t.apply(this,arguments)||this}return n(e,t),e.prototype.start=function(){a.audioMgr.playMusic(i.BATTLE)},e}(r))||c);e._RF.pop()}}}));

System.register("chunks:///_virtual/battleRule.ts",["cc"],(function(t){"use strict";var e;return{setters:[function(t){e=t.cclegacy}],execute:function(){e._RF.push({},"1f9b3i7TVhJH5ZifZznMY8S","battleRule",void 0);t("C_ROUND_CAMP_LIST",[[2,2,2,1,2,2,1,2,1],[1,1,2,1,1,2,2,1,1],[2,2,1,1,2,2,2,2,1],[1,1,2,2,2,2,1,1,1],[2,2,1,2,1,2,2,2,2],[1,1,2,2,2,1,1,1,2],[2,1,1,2,1,1,2,1,2],[1,2,2,1,1,1,2,1,2],[2,1,1,2,1,1,2,1,1],[1,1,1,2,2,2,2,1,2],[2,1,2,2,1,2,1,2,1],[1,2,2,1,2,1,1,2,2],[1,1,2,2,1,1,1,2,1],[2,1,1,2,1,2,1,1,1],[1,2,1,1,2,2,1,1,1],[1,2,2,2,1,2,2,2,2],[1,2,1,1,1,1,2,2,2],[1,2,2,2,1,2,1,2,2],[2,1,1,1,2,2,2,1,1],[2,1,1,2,2,1,1,1,2],[2,2,1,2,2,1,1,1,1],[2,1,1,1,1,1,2,2,1],[1,2,2,2,2,2,1,2,1],[1,2,1,2,1,2,1,1,2],[2,1,1,2,1,2,2,2,2],[2,2,1,2,2,1,1,2,1],[2,2,2,2,2,1,1,1,2],[1,1,2,2,2,2,1,2,2],[1,2,2,2,1,2,1,1,1],[2,2,1,1,1,2,2,2,1],[1,1,2,2,2,1,2,1,1],[2,1,1,2,2,1,1,2,1],[2,2,2,1,1,2,1,1,2],[1,2,1,1,1,2,2,1,1],[1,2,2,2,2,2,2,2,1],[1,2,2,1,2,1,2,1,1],[2,2,2,2,2,2,1,1,1],[1,1,1,1,2,2,2,1,1],[2,2,2,2,1,1,2,2,1],[1,1,2,2,2,1,2,2,1],[2,1,1,1,2,2,1,2,2],[2,2,2,2,1,1,2,1,1],[1,1,2,1,2,1,1,2,1],[2,2,2,2,1,2,1,2,2],[2,2,2,2,2,2,2,1,1],[2,2,2,1,1,1,1,2,2],[2,2,1,1,2,1,2,2,2],[1,1,1,1,1,2,2,2,1],[2,1,1,1,1,1,1,2,2],[1,2,1,1,1,1,2,2,1],[2,2,1,1,2,2,1,1,2],[2,2,1,1,2,1,1,1,2],[1,1,1,2,2,2,2,2,2],[1,2,1,2,2,1,1,2,2],[1,1,1,2,2,2,1,1,1],[1,2,1,2,2,2,2,1,1],[2,2,1,2,1,2,1,2,1],[1,2,2,2,1,1,2,1,1],[2,2,1,2,2,1,1,1,2],[1,2,2,2,1,2,2,2,1],[1,1,1,1,2,2,1,2,2],[2,2,1,1,1,2,1,1,1],[2,1,2,2,1,1,2,2,1],[1,2,1,2,2,2,2,2,2],[1,2,1,2,2,2,1,1,1],[1,2,1,2,1,2,2,2,2],[2,2,1,2,1,2,2,1,2],[1,2,2,1,2,1,2,1,2],[2,1,2,2,2,1,1,2,2],[2,1,1,2,2,1,1,1,1],[1,1,1,1,2,2,2,2,2],[1,2,2,2,2,1,2,1,1],[1,2,1,1,2,1,2,2,1],[1,2,2,1,1,2,1,1,2],[1,1,2,2,1,2,1,1,2],[2,1,1,1,2,1,1,2,2],[2,2,1,2,1,2,1,1,2],[1,2,2,2,2,1,1,2,2],[2,1,1,2,2,2,1,1,2],[1,2,2,2,2,1,1,1,1],[1,1,1,1,2,1,2,1,2],[2,1,1,1,2,2,2,1,2],[1,1,2,1,1,1,2,2,2],[1,2,2,2,1,1,2,1,2],[1,1,2,2,1,1,2,1,2],[1,1,2,2,1,2,1,1,1],[2,2,2,2,2,2,1,1,2],[2,2,2,1,1,2,2,2,1],[1,1,1,1,2,2,2,2,1],[1,2,1,2,1,1,1,1,2],[2,1,1,2,1,2,2,1,1],[1,1,2,1,2,2,1,1,1],[1,2,1,2,2,2,2,1,2],[1,1,2,2,2,2,1,1,2],[1,2,1,1,1,2,2,1,2],[1,2,2,1,1,1,1,2,2],[1,2,2,2,2,2,1,2,2],[1,2,1,2,1,1,1,2,1],[2,1,2,2,1,1,2,1,1],[2,2,2,2,2,2,1,2,1],[1,2,1,1,2,1,2,1,2],[2,1,2,2,1,1,1,1,1],[1,1,1,2,2,1,1,2,1],[1,1,1,2,2,1,2,1,2],[2,1,2,2,1,1,1,2,2],[2,1,2,1,1,1,1,1,2],[1,2,2,1,2,2,1,2,2],[1,2,2,2,2,1,2,1,2],[2,1,2,2,1,2,1,2,2],[1,1,2,1,2,1,2,2,1],[1,1,1,2,1,1,2,1,2],[2,1,1,1,1,1,2,2,2],[2,1,2,1,2,1,2,2,2]]);e._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/battle', 'chunks:///_virtual/battle'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});