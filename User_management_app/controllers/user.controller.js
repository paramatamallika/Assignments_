import * as userService from '../services/user.service.js';


export const createUser = async (req, res, next) => {
try {
await userService.createUser(req.body);
res.status(201).json({ message: 'User created successfully' });
} catch (err) {
next(err);
}
};


export const getUsers = async (req, res, next) => {
try {
const users = await userService.getAllUsers();
res.status(200).json(users);
} catch (err) {
next(err);
}
};


export const getUser = async (req, res, next) => {
try {
const user = await userService.getUserById(req.params.id);
res.status(200).json(user);
} catch (err) {
res.status(404).json({ message: 'User not found' });
}
};


export const updateUser = async (req, res, next) => {
try {
await userService.updateUser(req.params.id, req.body);
res.status(200).json({ message: 'User updated successfully' });
} catch (err) {
next(err);
}
};


export const deleteUser = async (req, res, next) => {
try {
await userService.deleteUser(req.params.id);
res.status(200).json({ message: 'User deleted successfully' });
} catch (err) {
next(err);
}
};