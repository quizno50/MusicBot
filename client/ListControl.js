function ListControl()
{
	UIElement.call(this);

	this.items = [];
	this._itemElements = [];
	this._controls = [];
	this._border = 0;

	this.render = function(pe)
	{
		this.__proto__.render.call(this, pe);
		// This might need to be moved into the doLayout function.
		if (this._itemElements.length != this.items.length)
		{
			this._itemElements.splice(0, this._itemElements.length);
			for (var i = 0; i < this.items.length; ++i)
			{
				var newElem = document.createElement("div");
				newElem.style.width = "100%";
				newElem.style.height = "3em";
				newElem.style.border = "none";
				newElem.style.display = "block";
				newElem.appendChild(document.createTextNode(this.items[i]));
				this._element.appendChild(newElem);
				this._itemElements.push(newElem);
			}
		}
	}
}

ListControl.prototype = new UIElement();
