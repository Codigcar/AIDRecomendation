
const { generarJWT } = require('../../helpers/generarJWT');
const jwt = require('jsonwebtoken');

class UserController {


    constructor({ userService, patientService, doctorService, medicalHistoryService }) {
        this._userService = userService;
        this._patientService = patientService;
        this._doctorService = doctorService;
        this._medicalHistoryService = medicalHistoryService;
    }

    async verifyTest(req, res) {
        res.send({
            message: "Hellos, this is a Test"
        })
    }

    async getMessages(req, res) {

        try {
            const messages = await this._userService.getAll();
            res.send({
                status: "200",
                payload: messages
            })
        } catch (err) {
            res.send({
                status: "404",
                message: err
            })
        }
    }

    async writeMessage(req, res) {
        try {
            const { Correo, Usuario, Contrasenia, Rol, PalabraSecreta, ...dataModel } = req.body;

            const userCreated = await this._userService.create({Correo, Usuario, Contrasenia, Rol, PalabraSecreta});
            
            dataModel.userId = userCreated.id;

            var modelCreated = '';
            
            if(Rol === 1){ 
                modelCreated = await this._patientService.create(dataModel)
                await this._medicalHistoryService.create({patientId: modelCreated.id });
            }
            else {
                modelCreated = await this._doctorService.create(dataModel);
            }

            // crear historialMedico x default

            res.status(200).send({
                user: userCreated,
                modelCreated,
            })
        } catch (err) {
            console.log(err);
            res.status(400).send({
                message: 'No se pudo crear usuario'
            })
        }
    }

    async deleteMessage(req, res) {
        try {
            const { id } = req.params;
            await this._userService.delete(id);
            res.status(200).send({
                payload: "Deleted successfully"
            })
        } catch (error) {
            console.log(error);
            res.status(400).send({
                message: 'No se pudo eliminar'
            })
        }

    }

    async updateMessage(req, res) {
        try {
            const { body } = req;
            const { id } = req.params;

            await this._userService.update(id, body);
            res.send({
                status: "204",
                payload: "Updated successfully"
            })

        } catch (error) {
            res.send({
                status: "404",
                message: error
            })
        }
    }

    async getMessage(req, res) {
        try {
            const { id } = req.params;
            const message = await this._userService.get(id);
            if (message) {
                return res.send({
                    status: "200",
                    payload: message
                });
            }else{
                return res.send({
                    status: "404",
                    payload: "Not found the element"
                });
            }

        } catch (error) {
            res.send({
                status: "404",
                message: error
            })
        }
    }

    async getIdByToken(req, res) {
        console.log('TOKEN');
        try {
            const { token } = req.params;

            const { uid } = jwt.verify( token, process.env.SECRETORPRIVATEKEY );
            let patientOdoctor = '';
             patientOdoctor = await this._patientService.getByForeignKeyUserId(uid);
            if( !patientOdoctor ){
                patientOdoctor = await this._doctorService.getByForeignKeyUserId(uid);
            }
            
            const user = await this._userService.get(patientOdoctor.userId);

            user.patientOdoctor = patientOdoctor


            res.send({
                // patientOdoctor,
                user
            })

        } catch (error) {
            res.send({
                status: "404",
                message: error
            })
        }
    }

}

module.exports = UserController;