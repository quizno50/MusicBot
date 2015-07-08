function ConcatImmediateTextChildren(elem)
{
	var retStr = "";
	if (!elem instanceof HTMLElement)
	{
		throw "Parameter must be an instance of HTMLElement.";
	}

	for (var i = 0; i < elem.childNodes.length; ++i)
	{
		if (elem.childNodes[i].nodeType == HTMLElement.TEXT_NODE)
		{
			retStr += elem.childNodes[i].nodeValue;
		}
	}
	
	return retStr;
}

function fitStrToWidth(fontFace, s, targetWidth, moe)
{
	var delta = 25;
	var curSize = 25;
	var c = document.createElement('canvas');
	var ctx = c.getContext('2d');
	var width = 0;
	var fontStr = "";
	var lastGo = 0;

	if (typeof(moe) == 'undefined') moe = 3 / targetWidth;
	if (s == "") return 99;
	targetWidth -= 1;

	do
	{
		if (width > targetWidth)
		{
			if (lastGo > 0)
			{
				delta /= 2;
			}
			curSize -= delta;
			lastGo = -1;
		}
		else if (width < targetWidth)
		{
			if (lastGo < 0)
			{
				delta /= 2;
			}
			curSize += delta;
			lastGo = +1;
		}
		fontStr = curSize + "px" + " " + fontFace;
		ctx.font = fontStr;
		var fm = ctx.measureText(s);
		width = fm.width;
	} while (width > targetWidth || (1.0 - moe) * targetWidth > width)

	delete ctx, c, fm;

	return Math.floor(curSize);
}

function UIElement()
{
	this._parentElement = null;
	this._element = null;
	this._locale = [0, 0]; // X, Y
	this._gridLocale = [0, 0]; // row, column
	this._dim = [1, 1];    // w, h
	this._gridDim = [1, 1] // w, h
	this._controls = [];
	this._border = 1;
	this.text = "";

	this.styleDict = {"border" : "solid 1px #000000", "border-radius" : "5px",
			"background" : "#afafaf", "display" : "block", "position" : "absolute" };

	this.render = function(pe)
	{
		if (this._element == null)
		{
			this._element = document.createElement('div');
		}

		this._element.uiControl = this;

		if (this._parentElement != pe)
		{
			this._parentElement = pe;
		}

		if (this._parentElement == null)
		{
			// Looks like we don't know who we belong to, so we better just bail out
			// before anyone gets hurt.
			return;
		}

		// Make sure that we belong to our parent element.
		if (this._element.parentElement == null)
		{
			this._parentElement.appendChild(this._element);
		}

		if (this._element.parentElement != this._parentElement)
		{
			throw "We seem to be owned by two seperate parents.";
		}

		this.doLayout();

		for (var i = 0; i < this._controls.length; ++i)
		{
			this._controls[i].render(this._element);
		}

		this.applyStyle();

		if (ConcatImmediateTextChildren(this._element) != this.text)
		{
			this._element.appendChild(document.createTextNode(this.text));
		}
	}

	this.applyStyle = function()
	{
		this.styleDict["left"] = this._locale[0] + 'px';
		this.styleDict["top"] = this._locale[1] + 'px';
		this.styleDict["width"] = this._dim[0] + 'px';
		this.styleDict["height"] = this._dim[1] + 'px';
		this.styleDict["border"] = "solid #000000 " + this._border + "px";
		this._element.style["overflowX"] = "hidden";
		this._element.style["overflowY"] = "hidden";
		this._element.style["fontFamily"] = "sans-serif";
		this._element.style.fontSize = Math.min(
				fitStrToWidth(this._element.style.fontFamily, this.text,
				this._dim[0]), this._dim[1] - 1) + 'px';
		for (var prop in this.styleDict)
		{
			this._element.style[this.convertCSSNameToJS(prop)] = this.styleDict[prop];
		}
	}

	this.convertCSSNameToJS = function(cssName)
	{
		var i = 0, nextCap = false, finalName = "";
		for (i = 0; i < cssName.length; ++i)
		{
			if (cssName.substr(i, 1) == '-')
			{
				nextCap = true;
			}
			else
			{
				if (nextCap)
				{
					finalName += cssName.substr(i, 1).toUpperCase();
				}
				else
				{
					finalName += cssName.substr(i, 1);
				}
				nextCap = false;
			}
		}
		return finalName;
	}

	this.doLayout = function()
	{
		var i, gridWidth = 0, gridHeight = 0;
		for (i = 0; i < this._controls.length; ++i)
		{
			var cr = this._controls[i]._gridLocale[1] + this._controls[i]._gridDim[1];
			gridWidth = cr > gridWidth ? cr : gridWidth;
			var cb = this._controls[i]._gridLocale[0] + this._controls[i]._gridDim[0];
			gridHeight = cb > gridHeight ? cb : gridHeight;
		}
		for (i = 0; i < this._controls.length; ++i)
		{
			var tc = this._controls[i];
			var gridUnitWidth = this._dim[0] / gridWidth;
			var gridUnitHeight = this._dim[1] / gridHeight;
			tc._dim = [ tc._gridDim[1] * gridUnitWidth - 2 * tc._border,
					tc._gridDim[0] * gridUnitHeight - 2 * tc._border];
			tc._locale = [ gridUnitWidth * tc._gridLocale[1],
					gridUnitHeight * tc._gridLocale[0] ];
		}
	}
}
