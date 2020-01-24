import scrollMagic from "scrollmagic";

export default ( {app}, inject) => {
	app.scrollMagic = new scrollMagic.init();
};