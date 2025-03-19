import express from 'express';

const propertyRouter = express.Router();


propertyRouter.post('/add', (req, res) => {
    const { title, location, price, description } = req.body;
    if (!title || !location || !price || !description) {
        return res.status(400).json({ success: false, message: "Please provide all required fields" });
    }
    // Add property to database
    res.status(201).json({ success: true, message: "Property added successfully" });
}
);

propertyRouter.get('/userproperty', (req, res) => {
    const { userId } = req.query;
    if (!userId) {
        return res.status(400).json({ success: false, message: "Please provide userId" });
    }
    // Fetch user properties from database
    res.status(200).json({ success: true, message: "User properties fetched successfully" });
}
);

propertyRouter.get('/all', (req, res) => {
    // Fetch all properties from database
    res.status(200).json({ success: true, message: "All properties fetched successfully" });
});
propertyRouter.get('/:id', (req, res) => {
    const { id } = req.params;
    // Fetch property by id from database
    res.status(200).json({ success: true, message: `Property with id ${id} fetched successfully` });
}
);
propertyRouter.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, location, price, description } = req.body;
    if (!title || !location || !price || !description) {
        return res.status(400).json({ success: false, message: "Please provide all required fields" });
    }
    // Update property in database
    res.status(200).json({ success: true, message: `Property with id ${id} updated successfully` });
}
);
propertyRouter.delete('/:id', (req, res) => {
    const { id } = req.params;
    // Delete property from database
    res.status(200).json({ success: true, message: `Property with id ${id} deleted successfully` });
}
);

export default propertyRouter;