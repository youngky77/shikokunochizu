(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.ehime1 = function() {
	this.initialize(img.ehime1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1079);


(lib.ehime2 = function() {
	this.initialize(img.ehime2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1079);


(lib.kagawa1 = function() {
	this.initialize(img.kagawa1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1079);


(lib.kagawa2 = function() {
	this.initialize(img.kagawa2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1079);


(lib.kochi1 = function() {
	this.initialize(img.kochi1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1079);


(lib.kochi2 = function() {
	this.initialize(img.kochi2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1079);


(lib.shikokuimage = function() {
	this.initialize(img.shikokuimage);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1079);


(lib.tokushima1 = function() {
	this.initialize(img.tokushima1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1079);


(lib.tokushima2 = function() {
	this.initialize(img.tokushima2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1079);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Scene_1_BG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BG
	this.instance = new lib.shikokuimage();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_BG, null, null);


(lib.B_tokushima = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Button animation2
	this.instance = new lib.tokushima2();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2));

	// Button animation1
	this.instance_1 = new lib.tokushima1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1079);


(lib.B_kochi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Button animation2
	this.instance = new lib.kochi2();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2));

	// Button animation1
	this.instance_1 = new lib.kochi1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1079);


(lib.B_kagawa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Button animation2
	this.instance = new lib.kagawa2();
	this.instance.parent = this;
	this.instance.setTransform(0,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2));

	// Button animation1
	this.instance_1 = new lib.kagawa1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1,1920,1079);


(lib.B_ehime = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Button animation2
	this.instance = new lib.ehime2();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2));

	// Button animation1
	this.instance_1 = new lib.ehime1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1079);


(lib.Scene_1_Tokushima = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Tokushima
	this.Z_tokushima = new lib.B_tokushima();
	this.Z_tokushima.name = "Z_tokushima";
	this.Z_tokushima.parent = this;
	new cjs.ButtonHelper(this.Z_tokushima, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.Z_tokushima).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Tokushima, null, null);


(lib.Scene_1_Kochi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Kochi
	this.Z_kochi = new lib.B_kochi();
	this.Z_kochi.name = "Z_kochi";
	this.Z_kochi.parent = this;
	new cjs.ButtonHelper(this.Z_kochi, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.Z_kochi).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Kochi, null, null);


(lib.Scene_1_Kagawa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Kagawa
	this.Z_kagawa = new lib.B_kagawa();
	this.Z_kagawa.name = "Z_kagawa";
	this.Z_kagawa.parent = this;
	new cjs.ButtonHelper(this.Z_kagawa, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.Z_kagawa).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Kagawa, null, null);


(lib.Scene_1_Ehime = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ehime
	this.Z_ehime = new lib.B_ehime();
	this.Z_ehime.name = "Z_ehime";
	this.Z_ehime.parent = this;
	this.Z_ehime.setTransform(960,539.5,1,1,0,0,0,960,539.5);
	new cjs.ButtonHelper(this.Z_ehime, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.Z_ehime).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Ehime, null, null);


// stage content:
(lib.shikokuchizu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.Z_kagawa = this.Kagawa.Z_kagawa;
		this.Z_kochi = this.Kochi.Z_kochi;
		this.Z_ehime = this.Ehime.Z_ehime;
		this.Z_tokushima = this.Tokushima.Z_tokushima;
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Kagawa_obj_
	this.Kagawa = new lib.Scene_1_Kagawa();
	this.Kagawa.name = "Kagawa";
	this.Kagawa.parent = this;
	this.Kagawa.setTransform(960,540,1,1,0,0,0,960,540);
	this.Kagawa.depth = 0;
	this.Kagawa.isAttachedToCamera = 0
	this.Kagawa.isAttachedToMask = 0
	this.Kagawa.layerDepth = 0
	this.Kagawa.layerIndex = 0
	this.Kagawa.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Kagawa).wait(1));

	// Kochi_obj_
	this.Kochi = new lib.Scene_1_Kochi();
	this.Kochi.name = "Kochi";
	this.Kochi.parent = this;
	this.Kochi.setTransform(960,539.5,1,1,0,0,0,960,539.5);
	this.Kochi.depth = 0;
	this.Kochi.isAttachedToCamera = 0
	this.Kochi.isAttachedToMask = 0
	this.Kochi.layerDepth = 0
	this.Kochi.layerIndex = 1
	this.Kochi.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Kochi).wait(1));

	// Ehime_obj_
	this.Ehime = new lib.Scene_1_Ehime();
	this.Ehime.name = "Ehime";
	this.Ehime.parent = this;
	this.Ehime.setTransform(960,539.5,1,1,0,0,0,960,539.5);
	this.Ehime.depth = 0;
	this.Ehime.isAttachedToCamera = 0
	this.Ehime.isAttachedToMask = 0
	this.Ehime.layerDepth = 0
	this.Ehime.layerIndex = 2
	this.Ehime.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ehime).wait(1));

	// Tokushima_obj_
	this.Tokushima = new lib.Scene_1_Tokushima();
	this.Tokushima.name = "Tokushima";
	this.Tokushima.parent = this;
	this.Tokushima.setTransform(960,539.5,1,1,0,0,0,960,539.5);
	this.Tokushima.depth = 0;
	this.Tokushima.isAttachedToCamera = 0
	this.Tokushima.isAttachedToMask = 0
	this.Tokushima.layerDepth = 0
	this.Tokushima.layerIndex = 3
	this.Tokushima.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Tokushima).wait(1));

	// BG_obj_
	this.BG = new lib.Scene_1_BG();
	this.BG.name = "BG";
	this.BG.parent = this;
	this.BG.setTransform(960,539.5,1,1,0,0,0,960,539.5);
	this.BG.depth = 0;
	this.BG.isAttachedToCamera = 0
	this.BG.isAttachedToMask = 0
	this.BG.layerDepth = 0
	this.BG.layerIndex = 4
	this.BG.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.BG).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,960,540);
// library properties:
lib.properties = {
	id: '62DDD4099FABA7418220AB849C90D421',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ehime1.png", id:"ehime1"},
		{src:"images/ehime2.png", id:"ehime2"},
		{src:"images/kagawa1.png", id:"kagawa1"},
		{src:"images/kagawa2.png", id:"kagawa2"},
		{src:"images/kochi1.png", id:"kochi1"},
		{src:"images/kochi2.png", id:"kochi2"},
		{src:"images/shikokuimage.jpg", id:"shikokuimage"},
		{src:"images/tokushima1.png", id:"tokushima1"},
		{src:"images/tokushima2.png", id:"tokushima2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['62DDD4099FABA7418220AB849C90D421'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;