const Team = require('../models/team');

exports.createTeam = async (req, res) => {
    try {
        const { name, role, image } = req.body;

        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: 'At least one image is required' });
        }

        const imageUrls = req.files.map(file => file.path);

        const team = new Team({
            name,
            role,
            image: imageUrls[0]
        });

        await team.save();
        res.status(201).json({ message: 'Team created successfully', team });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

exports.getAllTeams = async (req, res) => {
    try {
        const teams = await Team.find();
        res.status(200).json({ teams });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

exports.getTeamById = async (req, res) => {
    try {
        const team = await Team.findById(req.params.id);
        if (!team) {
            return res.status(404).json({ message: 'Team not found' });
        }
        res.status(200).json({ team });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

exports.updateTeam = async (req, res) => {
    try {
        const { name, role, image } = req.body;

        const team = await Team.findById(req.params.id);
        if (!team) {
            return res.status(404).json({ message: 'Team not found' });
        }

        team.name = name;
        team.role = role;
        team.image = image;

        await team.save();
        res.status(200).json({ message: 'Team updated successfully', team });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

exports.deleteTeam = async (req, res) => {
    try {
        const team = await Team.findByIdAndDelete(req.params.id);
        if (!team) {
            return res.status(404).json({ message: 'Team not found' });
        }
        res.status(200).json({ message: 'Team deleted successfully', team });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

