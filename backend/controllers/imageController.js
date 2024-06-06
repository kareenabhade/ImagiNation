const Image = require('../models/Image');

const uploadImage = async (req, res) => {
    const { title, description, image } = req.body;

    try {
        if (!title || !description || !image) {
            res.status(400);
            throw new Error("All fields are required!");
        }

        const newImage = await Image.create({
            title, description, image
        });

        if (newImage) {
            res.status(201).json({
                _id: newImage._id,
                title: newImage.title,
                description: newImage.description,
                image: newImage.image,
            });
        } else {
            res.status(400);
            throw new Error("Failed to upload new image");
        }
    } catch (error) {
        console.error('Error during image upload:', error);
        res.status(500).json({ message: error.message });
    }
};

const getImages = async (req, res) => {
    try {
        const images = await Image.find();
        res.json(images);
    } catch (error) {
        console.error('Error fetching images:', error);  // Log the error for debugging
        res.status(500).json({ message: error.message });
    }
};

const incrementViews = async (req, res) => {
    try {
        const image = await Image.findById(req.params.id);
        if (image) {
            image.views += 1;
            await image.save();
            res.json(image);
        } else {
            res.status(404).json({ message: 'Image not found' });
        }
    } catch (error) {
        console.error('Error incrementing views:', error);  // Log the error for debugging
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    uploadImage,
    getImages,
    incrementViews,
};
