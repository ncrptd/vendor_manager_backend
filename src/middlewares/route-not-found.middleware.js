const routeNotFound = async (req, res, next) => {
    res.status(404).json({ errorMessage: 'Route not found' });
    next();
};

module.exports = routeNotFound