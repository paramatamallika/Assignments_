import { supabase } from '../db/supabaseClient.js';

// Signup User
export const signupUser = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
        return res.status(400).json({ error: 'All fields are required.' });

    try {
        const { data: existingUser, error: checkError } = await supabase
            .from('users')
            .select('*')
            .eq('email', email)
            .single();

        if (checkError && checkError.code !== 'PGRST116') return res.status(500).json({ error: checkError.message });
        if (existingUser) return res.status(409).json({ error: 'Email already exists' });

        const { data, error } = await supabase
            .from('users')
            .insert([{ name, email, password }])
            .select();

        if (error) return res.status(500).json({ error: error.message });
        if (!data || data.length === 0) return res.status(500).json({ error: 'User creation failed' });

        res.status(201).json({ message: 'User created successfully', user: data[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete User
export const deleteUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const { data, error } = await supabase.from('users').delete().eq('id', userId);
        if (error) return res.status(500).json({ error: error.message });
        if (!data || data.length === 0) return res.status(404).json({ error: 'User not found' });

        res.json({ message: 'User deleted successfully, todos cascade deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};
