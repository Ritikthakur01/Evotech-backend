import express from 'express'

const router = express.Router();

import { formSubmission , getAllData } from '../controller/surveyController.js';


router.post("/formSubmission",formSubmission);

router.get("/getAllData", getAllData)


export default router