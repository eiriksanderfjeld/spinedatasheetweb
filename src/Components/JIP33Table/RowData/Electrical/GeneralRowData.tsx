import { Datasheet } from "../../../../Models/Datasheet"
import { TableRow } from "../TableRow"

export const generateGeneralRowData = (datasheet: Datasheet): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Tag number:",
            purchaserReq: datasheet.tagNo,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Tag description:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.tagDescription,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.tagDescription,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Manufacturer:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.manufacturer,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.manufacturer,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Serial number:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.serialNumber,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.serialNumber,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Order status:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.orderStatus,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.orderStatus,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Conformity Assessment System (CAS) level:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.conformityAssessmentSystemLevel,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.conformityAssessmentSystemLevel,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Frame size:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.frameSize,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.frameSize,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Model number:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.modelNumber,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.modelNumber,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "IEEE Std 841 motor type:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.ieeeStd841MotorType,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.ieeeStd841MotorType,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Additional certification:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.additionalCertification,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.additionalCertification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Starting method:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.startingMethod,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.startingMethod,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Number of poles/motor synchronous speed:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.numberOfPolesMotorSynchronousSpeed,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.numberOfPolesMotorSynchronousSpeed,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Direction of rotation:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.directionOfRotation,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.directionOfRotation,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Method of motor coupling to driven equipment:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.methodOfMotorCouplingToDrivenEquipment,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.methodOfMotorCouplingToDrivenEquipment,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
}
