function StaticLabel()
{
	UIElement.call(this);
	this._border = 0;

	this.render = function(pe)
	{
		if (this._element == null)
		{
			this._element = document.createElement('span');
		}

		this.__proto__.render.call(this, pe);
	}
}

StaticLabel.prototype = new UIElement();
