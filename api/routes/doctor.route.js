const {Router} = require("express");

const DoctorRouter = function({doctorController}){
    const router = Router();

    router.get('/',doctorController.getAllDoctors.bind(doctorController));

    router.get('/:doctorId/medicalConsultations',doctorController.getMessages.bind(doctorController));
    router.get('/:doctorId/acceptedMedicalConsultations',doctorController.getMessagesByDoctorId.bind(doctorController));
    // router.post('/:doctorId/medicalConsultations/:medicalConsultationId/questions',doctorController.writeMessage.bind(doctorController));
    router.put('/:doctorId/medicalConsultations/:medicalConsultationId',doctorController.updateMessage.bind(doctorController));
    // router.delete('/:id',doctorController.deleteMessage.bind(doctorController));
    router.put('/:doctorId/medicalConsultations/:medicalConsultationId/questions',doctorController.updateQuestionsAndObservation.bind(doctorController));
    // router.get('/:id',doctorController.getMessage.bind(doctorController));
    // router.get('/:doctorId',doctorController.getMessage.bind(doctorController));

    // ranking doctors
    router.get('/rankings',doctorController.getAllDoctorsByRanking.bind(doctorController));
    return router;
}

module.exports = DoctorRouter;