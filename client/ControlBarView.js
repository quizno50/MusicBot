function ControlBarView()
{
	UIElement.call(this);
	this.prevButton = new ImagePushButton();
	this.prevButton._gridDim = [2, 1];
	this.prevButton._gridLocale = [0, 0];
	this.prevButton.setImage("img/PrevButtonIcon.png");

	this.playButton = new ImagePushButton();
	this.playButton._gridDim = [2, 1];
	this.playButton._gridLocale = [0, 1];
	this.playButton.setImage("img/PlayButtonIcon.png");

	this.nextButton = new ImagePushButton();
	this.nextButton._gridDim = [2, 1];
	this.nextButton._gridLocale = [0, 2];
	this.nextButton.setImage("img/NextButtonIcon.png");

	this.albumArtDisplay = new StaticImage();
	this.albumArtDisplay._gridDim = [2, 1];
	this.albumArtDisplay._gridLocale = [0, 4];

	this.songTitleLabel = new StaticLabel();
	this.songTitleLabel._gridDim = [1, 4];
	this.songTitleLabel._gridLocale = [0, 5];
	this.songTitleLabel.text = "All the Way 4U";

	this.songArtistLabel = new StaticLabel();
	this.songArtistLabel._gridDim = [1, 2];
	this.songArtistLabel._gridLocale = [1, 5];
	this.songArtistLabel.text = "Poets of the Fall";

	this.songAlbumLabel = new StaticLabel();
	this.songAlbumLabel._gridDim = [1, 2];
	this.songAlbumLabel._gridLocale = [1, 7];
	this.songAlbumLabel.text = "Carnival of Rust";

	this.ratingWidget = new RatingWidget();
	this.ratingWidget._gridDim = [1, 3];
	this.ratingWidget._gridLocale = [0.5, 9];
	this.ratingWidget.setRating(4);

	this.userImage = new StaticImage();
	this.userImage._gridDim = [2, 1];
	this.userImage._gridLocale = [0, 12];
	this.userImage.setImage('img/DefaultUserIcon.png');

	this.userName = new StaticLabel();
	this.userName._gridDim = [1, 2];
	this.userName._gridLocale = [0, 13];

	this.signoutLink = new LinkText();
	this.signoutLink._gridDim = [1, 2];
	this.signoutLink._gridLocale = [1, 13];

	this._controls = [this.prevButton, this.playButton, this.nextButton,
			this.albumArtDisplay, this.songTitleLabel, this.songArtistLabel,
			this.songAlbumLabel, this.ratingWidget, this.userImage, this.userName,
			this.signoutLink];
}

ControlBarView.prototype = new UIElement();
