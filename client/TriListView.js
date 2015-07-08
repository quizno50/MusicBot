function TriListView()
{
	UIElement.call(this);

	this.globalSearch = new ListView();
	this.globalSearch._gridDim = [1, 1];
	this.globalSearch._gridLocale = [0, 0];

	this.playlist = new ListView();
	this.playlist._gridDim = [1, 1];
	this.playlist._gridLocale = [0, 1];

	this.personalCollection = new ListView();
	this.personalCollection._gridLocale = [0, 2];
	this.personalCollection._gridDim = [1, 1];

	this._controls = [ this.globalSearch, this.playlist, this.personalCollection ];

	this._border = 0;
}

TriListView.prototype = new UIElement();
