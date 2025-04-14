const { createService, getAllServices, getServiceById, updateService, deleteService } = require("../controller/serviceController/serviceController");



const router = require("express").Router();

router.route("/create").post(createService);
router.route("/service").get(getAllServices)
router.route("/service/:id").get(getServiceById)
                    .patch(updateService)
                    .delete(deleteService)


module.exports =router                   
