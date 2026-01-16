const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const {
    createTeam,
    getAllTeams,
    getTeamById,
    updateTeam,
    deleteTeam
} = require('../controllers/teamController');


router.post('/', upload.array('images', 1), createTeam);
router.get('/', getAllTeams);
router.get('/:id', getTeamById);
router.put('/:id', upload.array('images', 1), updateTeam);
router.delete('/:id', deleteTeam);

module.exports = router;
