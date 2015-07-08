function StaticImage()
{
	UIElement.call(this);
	this._element = null;
	this.imgSrc = "";

	this.render = function(pe)
	{
		if (this._element == null)
		{
			this._element = new Image();
		}
		this._element.setAttribute('src', this.imgSrc);
		this.__proto__.render.call(this, pe);
	}

	this.setImage = function(url)
	{
		this.imgSrc = url;
	}
}

StaticImage.prototype = new UIElement();
