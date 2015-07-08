function FilterControl()
{
	UIElement.call(this);

	this.styleDict["border-radius"] = "2px";
	this.styleDict["padding"] = "0px";

	this.render = function(pe)
	{
		if (this._element == null)
		{
			this._element = document.createElement('input');
			this._element.setAttribute("type", "text");
			this._element.onkeypress = function(e) {
				// "this" here is referring to the HTMLElement.
				this.parentElement.uiControl.render(this.parentElement.parentElement);
			}
		}
		this.text = this._element.value;
		this.__proto__.render.call(this, pe);
	}
}

FilterControl.prototype = new UIElement();
