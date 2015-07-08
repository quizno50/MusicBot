function ListView()
{
	this.filterBox = new FilterControl();
	this.filterBox._gridDim = [1, 1];
	this.filterBox._gridLocale = [0, 0];

	this.innerList = new ListControl();
	this.innerList._gridDim = [9, 1];
	this.innerList._gridLocale = [1, 0];

	this._controls = [this.filterBox, this.innerList];
}

ListView.prototype = new UIElement();
