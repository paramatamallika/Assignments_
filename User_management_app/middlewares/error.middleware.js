export const errorHandler = (err, req, res, next) => {
if (err.code === '23505') {
return res.status(409).json({ message: 'Email already exists' });
}


res.status(500).json({ message: err.message || 'Internal Server Error' });
};