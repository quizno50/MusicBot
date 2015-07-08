function MainUIView()
{
	UIElement.call(this);
	this.controlBar = new ControlBarView();
	this.controlBar._gridDim = [1, 1];
	this.controlBar._gridLocale = [0, 0];

	this.triList = new TriListView();
	this.triList._gridDim = [4, 1];
	this.triList._gridLocale = [1, 0];

	this.details = new DetailsView();
	this.details._gridDim = [4, 1];
	this.details._gridLocale = [5, 0];

	this._controls = [this.controlBar, this.triList, this.details];

	this._styleDict = { "border-radius" : "5px", "background" : "#333333",
			"border" : "1px solid #000000", "position" : "absolute",
			"top" : "0px", "left" : "0px", "width" : window.innerWidth + "px",
			"height" : window.innerHeight + "px" }
	this._locale = [0, 0];
	this._dim = [window.innerWidth - this._border * 2,
			window.innerHeight - this._border * 2];
	this._gridDim = [1, 1];
	this._gridLocale = [0, 0];

	this.render = function(pe)
	{
		this._dim = [window.innerWidth - this._border * 2,
				window.innerHeight - this._border * 2];
		this.__proto__.render.call(this, pe);
	}
}

MainUIView.prototype = new UIElement();
