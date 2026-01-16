const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const {
    createProject,
    getAllProjects,
    getProjectById,
    updateProject,
    deleteProject
} = require('../controllers/projectController');

router.post('/', upload.array('images', 1), createProject);
router.get('/', getAllProjects);
router.get('/:id', getProjectById);
router.put('/:id', upload.array('images', 1), updateProject);
router.delete('/:id', deleteProject);

module.exports = router;

