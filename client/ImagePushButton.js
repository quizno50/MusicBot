function ImagePushButton()
{
	UIElement.call(this);
	this._element = null;
	this._border = 1;
	this.styleDict["border-radius"] = "10px";

	this.render = function(pe)
	{
		if (this._element == null)
		{
			this._element = document.createElement('img');
			this._element.setAttribute('src', this.imgSrc);
		}
		this.__proto__.render.call(this, pe);
	}

	this.setImage = function(url)
	{
		this.imgSrc = url;
	}
}

ImagePushButton.prototype = new UIElement();
