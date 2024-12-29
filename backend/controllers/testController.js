import supabase from '../models/TestModel.js';

export const createTest = async (req, res) => {
    try {
        const { error } = await supabase
            .from('test_table')
            .insert([{ test_column: req.body.test_column }]);
        if (error) throw error;
        res.status(201).json({ message: 'Data inserted successfully!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getTests = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('test_table')
            .select('*');
        if (error) throw error;
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
