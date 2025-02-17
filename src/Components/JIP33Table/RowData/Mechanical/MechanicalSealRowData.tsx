import { Datasheet } from "../../../../Models/Datasheet";
import { TableRow } from "../TableRow";

export const generateMechanicalSealRowData = (datasheet: Datasheet): TableRow[] => {
    return [
        {
            refClause: "",
            description: "API Standard 682 mechanical seal code:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.apiStandard682MechanicalSealCode,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.apiStandard682MechanicalSealCode,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "API Standard 682 data sheet attached:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.apiStandard682DataSheetAttached,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.apiStandard682DataSheetAttached,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Mechanical seal primary plan:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.mechanicalSealPrimaryPlan,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.mechanicalSealPrimaryPlan,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Mechanical seal primary plan construction:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.mechanicalSealPrimaryPlanConstruction,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.mechanicalSealPrimaryPlanConstruction,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Mechanical seal secondary plan:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.mechanicalSealSecondaryPlan,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.mechanicalSealSecondaryPlan,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Tubing fittings manufacturer:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.tubingFittingsManufacturer,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.tubingFittingsManufacturer,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Additional central flush port:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.additionalCentralFlushPort,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.additionalCentralFlushPort,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Heating jacket required:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.heatingJacketRequired,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.heatingJacketRequired,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Static sealing pressure maximum:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.staticSealingPressureMaximum,
            purchaserReqUOM: "bar g",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.staticSealingPressureMaximum,
            supplierOfferedValUOM: "bar g",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Static sealing pressure minimum:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.staticSealingPressureMinimum,
            purchaserReqUOM: "bar g",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.staticSealingPressureMinimum,
            supplierOfferedValUOM: "bar g",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Dynamic sealing pressure maximum:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.dynamicSealingPressureMaximum,
            purchaserReqUOM: "bar g",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.dynamicSealingPressureMaximum,
            supplierOfferedValUOM: "bar g",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Dynamic sealing pressure minimum:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.dynamicSealingPressureMinimum,
            purchaserReqUOM: "bar g",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.dynamicSealingPressureMinimum,
            supplierOfferedValUOM: "bar g",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Seal design temperature maximum:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.sealDesignTemperatureMaximum,
            purchaserReqUOM: "°C",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.sealDesignTemperatureMaximum,
            supplierOfferedValUOM: "°C",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Seal design temperature minimum:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.sealDesignTemperatureMinimum,
            purchaserReqUOM: "°C",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.sealDesignTemperatureMinimum,
            supplierOfferedValUOM: "°C",
            additionalNotes: "",
        },
    ]
}
