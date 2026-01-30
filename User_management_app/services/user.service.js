import { supabase } from '../config/supabase.js';
import bcrypt from 'bcrypt';


export const createUser = async (data) => {
const hashedPassword = await bcrypt.hash(data.password, 10);


const { error } = await supabase.from('userss').insert([
{ ...data, password: hashedPassword }
]);


if (error) throw error;
};


export const getAllUsers = async () => {
const { data, error } = await supabase
.from('userss')
.select('id, name, email, age, role, created_at');


if (error) throw error;
return data;
};


export const getUserById = async (id) => {
const { data, error } = await supabase
.from('userss')
.select('id, name, email, age, role, created_at')
.eq('id', id)
.single();


if (error) throw error;
return data;
};


export const updateUser = async (id, updates) => {
const { error } = await supabase
.from('userss')
.update(updates)
.eq('id', id);


if (error) throw error;
};


export const deleteUser = async (id) => {
const { error } = await supabase
.from('userss')
.delete()
.eq('id', id);


if (error) throw error;
};