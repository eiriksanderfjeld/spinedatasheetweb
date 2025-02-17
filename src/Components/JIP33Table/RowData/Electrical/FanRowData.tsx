import { Datasheet } from "../../../../Models/Datasheet"
import { TableRow } from "../TableRow"

export const generateFanRowData = (datasheet: Datasheet): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Fan material:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.fanMaterial,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.fanMaterial,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Fan impeller material:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.fanImpellerMaterial,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.fanImpellerMaterial,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Fan direction of rotation:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.fanDirectionOfRotation,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.fanDirectionOfRotation,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
}
