const Service = require("../../model/serviceModel");

// Create service
exports.createService = async (req, res) => {
  const { serviceName, requiredDocuments } = req.body;

  try {
    await Service.create({ serviceName, requiredDocuments });

    res.status(201).json({
      message: "Service created successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to create service",
      error: error.message,
    });
  }
};

// Get all services
exports.getAllServices = async (req, res) => {
  const services = await Service.find();
  if (services.length === 0) {
    return res.status(404).json({
      message: "No services found",
    });
  }

  res.status(200).json({
    message: "Services fetched successfully",
    services : services,
  });
};

// Get service by ID
exports.getServiceById = async (req, res) => {
  const { id } = req.params;
  const service = await Service.findById(id);

  if (!service) {
    return res.status(404).json({
      message: "Service not found",
    });
  }

  res.status(200).json({
    message: "Service fetched successfully",
    service,
  });
};

// Update service
exports.updateService = async (req, res) => {
  const { id } = req.params;
  const { serviceName, requiredDocuments } = req.body;

  await Service.findByIdAndUpdate(id, { serviceName, requiredDocuments });

  res.status(200).json({
    message: "Service updated successfully",
  });
};

// Delete service
exports.deleteService = async (req, res) => {
  const { id } = req.params;

  await Service.findByIdAndDelete(id);

  res.status(200).json({
    message: "Service deleted successfully",
  });
};

// Get total number of services
exports.getTotalServices = async (req, res) => {
  try {
    const total = await Service.countDocuments();
    res.status(200).json({ total });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch total services",
      error: error.message,
    });
  }
};

// Search services by service name
exports.searchServices = async (req, res) => {
  const { keyword } = req.query;

  try {
    const services = await Service.find({
      serviceName: { $regex: keyword, $options: "i" }  // case-insensitive search
    });

    if (services.length === 0) {
      return res.status(404).json({
        message: "No matching services found",
      });
    }

    res.status(200).json({
      message: "Services fetched successfully",
      services: services,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to search services",
      error: error.message,
    });
  }
};

