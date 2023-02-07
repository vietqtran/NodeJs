import express from 'express'
import homeController from '../controllers/homeController';
let router = express.Router()

const initWebRoute = (app) => {
      router.get('/', homeController.getHomePage);

      router.get('/details/user/:userId', homeController.getDetailsPage)

      router.post('/create-new-user', homeController.createNewUser)

      router.post('/delete-user', homeController.deleteUser)

      router.get('/edit-user/:userId', homeController.editUser)

      router.post('/update-user', homeController.updateUser)

      router.get('/upload', homeController.getUpLoadFilePage)

      return app.use('/', router)
}



export default initWebRoute