function RatingWidget()
{
	UIElement.call(this);
	this._innerStars = [];
	this.rating = 0;

	this.render = function(pe)
	{
		this.__proto__.render.call(this, pe);
	}

	this.doLayout = function()
	{
		if (this._innerStars.length != 5)
		{
			for (var starNum = 0; starNum < 5; ++starNum)
			{
				var newStar = new StaticImage();
				newStar.setImage('img/StarIcon.png');
				newStar._gridDim = [1, 1];
				newStar._gridLocale = [0, starNum];
				newStar._border = 0;
				this._innerStars.push(newStar);
				this._controls.push(newStar);
			}
		}
		this.__proto__.doLayout.call(this);
	}

	this.getRating = function()
	{
		return this.rating;
	}

	this.setRating = function(r)
	{
		this.rating = r;
		this.render(this._parentElement);
	}
}

RatingWidget.prototype = new UIElement();
