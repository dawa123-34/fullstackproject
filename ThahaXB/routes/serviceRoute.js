const { createService, getAllServices, getServiceById, updateService, deleteService, getTotalServices, searchServices } = require("../controller/serviceController/serviceController");



const router = require("express").Router();

router.route("/create").post(createService);
router.route("/service").get(getAllServices);
router.route("/service/total/count").get(getTotalServices); 
router.route("/service/search").get(searchServices);
router.route("/service/:id").get(getServiceById)
                    .patch(updateService)
                    .delete(deleteService)


  


module.exports =router                   
