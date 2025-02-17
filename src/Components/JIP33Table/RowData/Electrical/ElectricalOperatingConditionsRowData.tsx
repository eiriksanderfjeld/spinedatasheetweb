import { Datasheet } from "../../../../Models/Datasheet"
import { TableRow } from "../TableRow"

export const generateElectricalOperatingConditionsRowData = (datasheet: Datasheet): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Motor rated frequency:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.motorRatedFrequency,
            purchaserReqUOM: "Hz",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.motorRatedFrequency,
            supplierOfferedValUOM: "Hz",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Motor rated voltage:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.motorRatedVoltage,
            purchaserReqUOM: "V AC",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.motorRatedVoltage,
            supplierOfferedValUOM: "V AC",
            additionalNotes: "",
        },
    ]
}
