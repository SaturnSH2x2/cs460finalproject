/*
	Sprite3D.js: contains constructor and method definitions for
	the Sprite3D class, as well as for the Pixel3D struct.

	NOTE! This file is a heavy work in progress.

	The programmer has a nap. Hold out! Programmer!	
*/

// Pixel3D container, represents an individual pixel with some extra metadata
// TODO: finish writing this `````
Pixel3D = function(x, y, size, colorIndex) {
	this.material = new THREE.MeshStandardMaterial({});
	this.pixel = new THREE.Mesh(
		new THREE.BoxGeometry(size, size, size),
		this.material
	);
}


// Sprite3D constructor: initialize sprite
Sprite3D = function(image, pixelSize, pixelDistance) {
	// reference to group of pixels in Three.js
	this.pixelGroup = new THREE.Group();

	// TODO: stubbed, add actual image loading functionality later
	this.image = image;
    this.bmpLoader = new bmpLoader(image);

	// individual size of a pixel
	this.pixelSize = pixelSize;

	// distance between individual pixels in a sprite
	this.pixelDistance = pixelDistance;

	// color palette of the sprite
	// TODO: actually have the sprite analyze the image, currently pointless
	this.colorPalette = {};
}

// TODO: stubbed, resize pixels properly, and don't forget to take center into account!
Sprite3D.prototype.adjustPixelDistance = function(pixelDistance) {
	this.pixelDistance = pixelDistance;
}

// TODO: stubbed, add code for adjusting individual pixels with a certain color palette index
Sprite3D.prototype.adjustColorPalette = function(index, newColorVal) {
	this.colorPalette[index] = newColorVal;
}

// TODO: stubbed, add code for resizing individual pixel size
Sprite3D.prototype.adjustPixelSize = function(pixelSize) {
	this.pixelSize = pixelSize;
}

// TEST FUNCTION: just to test Three.js group functionality
Sprite3D.prototype.genPixelArray = function(scene, xres, yres) {
	for (var x = 0; x < xres; x++) {
		for (var y = 0; y < yres; y++) {
			var bx = new THREE.Mesh(
			new THREE.BoxGeometry(this.pixelSize, this.pixelSize, this.pixelSize),
			new THREE.MeshStandardMaterial({
			    color: 0xffffff,
			}))

			// the box won't be centered, but this is to just test if
			// we can get groups working properly in Three.js
			bxx = (x * this.pixelSize) + (x * this.pixelDistance);
			bxy = (y * this.pixelSize) + (y * this.pixelDistance);
			bx.position.set(bxx, bxy, 0);

			this.pixelGroup.add(bx);
		}
	}

	scene.add(this.pixelGroup);
};
