const VisitRequest = require("./../models/visitRequestModel");
const factory = require("../controllers/handleFactory");

exports.getAllVisitRequests = factory.getAll(VisitRequest, "VisitRequests");
exports.getVisitRequest = factory.getOne(VisitRequest, "VisitRequest");
exports.createVisitRequest = factory.createOne(VisitRequest, "VisitRequest");
exports.deleteVisitRequest = factory.deleteOne(VisitRequest, "VisitRequest");
