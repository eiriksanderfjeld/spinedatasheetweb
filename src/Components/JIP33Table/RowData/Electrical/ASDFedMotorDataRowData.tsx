import { Datasheet } from "../../../../Models/Datasheet"
import { TableRow } from "../TableRow"

export const generateASDFedMotorDataRowData = (datasheet: Datasheet): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Load type:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.loadType,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.loadType,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Minimum operating speed:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.minimumOperatingSpeed,
            purchaserReqUOM: "rpm",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.minimumOperatingSpeed,
            supplierOfferedValUOM: "rpm",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Maximum operating speed:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.maximumOperatingSpeed,
            purchaserReqUOM: "rpm",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.maximumOperatingSpeed,
            supplierOfferedValUOM: "rpm",
            additionalNotes: "",
        },
    ]
}
