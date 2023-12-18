System.register("chunks:///_virtual/loading",["./loadingMainUI.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/loadingMainUI.ts",["./rollupPluginModLoBabelHelpers.js","cc","./NGlobal.ts","./NEnum.ts","./NConst.ts"],(function(e){"use strict";var t,s,r,n,i,a,o,l,u,c,d,p,h,g,f,_,b;return{setters:[function(e){t=e.applyDecoratedDescriptor,s=e.inheritsLoose,r=e.initializerDefineProperty,n=e.assertThisInitialized,i=e.asyncToGenerator,a=e.regeneratorRuntime,o=e.createForOfIteratorHelperLoose},function(e){l=e.cclegacy,u=e._decorator,c=e.ProgressBar,d=e.Label,p=e.Component,h=e.SpriteAtlas,g=e.sp},function(e){f=e.NGlobal},function(e){_=e.E_StageType},function(e){b=e.C_BUNDLE_LIST}],execute:function(){var m,k,v,S,y,L,P,T,D;l._RF.push({},"b15a4KzI+5HBrpz0Q6Q/Idn","loadingMainUI",void 0);var C=u.ccclass,R=u.property;e("loadingMainUI",(m=C("loadingMainUI"),k=R(c),v=R(d),S=R(d),m((P=t((L=function(e){function t(){for(var t,s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return t=e.call.apply(e,[this].concat(i))||this,r(t,"pb",P,n(t)),r(t,"lbl_hint",T,n(t)),r(t,"lbl_progress",D,n(t)),t._taskList=void 0,t._runIdx=void 0,t._needAddProgress=0,t._everyTimeProgress=0,t}s(t,e);var l=t.prototype;return l.onLoad=function(){this._taskList=new Array},l.start=function(){this.node.active=!1,this.pb.progress=0,this.initTask()},l.initTask=function(){switch(f.mainScene.lastStageKey){case _.NONE:this.firstRun()}},l.createTask=function(e,t,s,r){return{hint:e,func:t,progress:s,isRun:!1,isComplete:!1,maxStep:r,currStep:0}},l.runTaskList=function(){this._taskList.length>0&&(this._runIdx=0,this.schedule(this.taskUpdate))},l.completeSubTask=function(e){this._needAddProgress+=e.progress/e.maxStep,this._everyTimeProgress=this._needAddProgress/60,this.lbl_hint.string=e.hint,e.currStep++,e.currStep==e.maxStep&&(e.isComplete=!0)},l.taskUpdate=function(e){this._needAddProgress>0&&(this.pb.progress+=this._everyTimeProgress,this.pb.progress>=1&&(this.pb.progress=1,this._needAddProgress=0),this._needAddProgress-=this._everyTimeProgress),this.lbl_progress.string=Math.floor(100*this.pb.progress)+"%";var t=this._taskList[this._runIdx];this.lbl_hint.string=t.hint,t.isRun?t.isComplete&&(this._runIdx<this._taskList.length-1?this._runIdx++:this._needAddProgress<=0&&(this.unschedule(this.taskUpdate),f.mainScene.enterStage(f.mainScene.nextStage))):(t.isRun=!0,t.func.call(this,t))},l.firstRun=function(){this.node.active=!0,f.userData.gameUD.initGameData(),this._taskList.push(this.createTask("Loading Config...",this.loadingRandomColorCfg.bind(this),.2,2)),this.runTaskList()},l.loadingRandomColorCfg=function(e){for(var t=this,s=0,r=0;r<2;r++)f.netMgr.http.post("https://login.dasinodao.com/nftinfo/",{nftid:1},(function(r){var n=JSON.parse(r.response);0==n.resultCode&&(s++,f.userData.gameUD.addPetColorCfg(n.data),2==s&&t._taskList.push(t.createTask("Loading Resources...",t.loadGlobalRes.bind(t),.8,f.userData.gameUD.getPreLoadSKin().length+f.userData.gameUD.getPreLoadWeapon().length)),t.completeSubTask(e))}))},l.loadGlobalRes=function(){var e=i(a().mark((function e(t){var s=this;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"res/role/res/skin/",f.AssteMgr.loadBundleAsync(b.COMMON).then((function(e){for(var r,n=f.userData.gameUD.getPreLoadSKin(),i=o(n);!(r=i()).done;){var a=r.value;f.AssteMgr.loadResAsync("res/role/res/skin/"+a,b.COMMON,h).then((function(e){e.addRef(),s.completeSubTask(t)}))}for(var l,u=f.userData.gameUD.getPreLoadWeapon(),c=o(u);!(l=c()).done;){var d=l.value;f.AssteMgr.loadResAsync("res/skill/"+d+"/"+d,b.COMMON,g.SkeletonData).then((function(e){e.addRef(),s.completeSubTask(t)}))}}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}(p)).prototype,"pb",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),T=t(L.prototype,"lbl_hint",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),D=t(L.prototype,"lbl_progress",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=L))||y));l._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/loading', 'chunks:///_virtual/loading'); 
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