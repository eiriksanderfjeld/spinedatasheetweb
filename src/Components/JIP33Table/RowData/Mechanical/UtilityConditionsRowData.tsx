import { Datasheet } from "../../../../Models/Datasheet";
import { TableRow } from "../TableRow";

export const generateUtilityConditionsRowData = (datasheet: Datasheet): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Drivers voltage:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.driversVoltage,
            purchaserReqUOM: "V",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.driversVoltage,
            supplierOfferedValUOM: "V",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Drivers phase:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.driversPhase,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.driversPhase,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Driver frequency:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.driversFrequency,
            purchaserReqUOM: "Hz",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.driversFrequency,
            supplierOfferedValUOM: "Hz",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Heating medium:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.heatingMedium,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.heatingMedium,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Heating voltage:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.heatingVoltage,
            purchaserReqUOM: "V",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.heatingVoltage,
            supplierOfferedValUOM: "V",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Heating phase:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.heatingPhase,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalPurchaserRequirement?.heatingPhase,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Heating frequency:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.heatingFrequency,
            purchaserReqUOM: "Hz",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.heatingFrequency,
            supplierOfferedValUOM: "Hz",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Heating steam minimum temperature:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.heatingSteamMinimumTemperature,
            purchaserReqUOM: "°C",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.heatingSteamMinimumTemperature,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Heating steam maximum temperature:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.heatingSteamMaximumTemperature,
            purchaserReqUOM: "°C",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.heatingSteamMaximumTemperature,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Heating steam minimum pressure:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.heatingSteamMinimumPressure,
            purchaserReqUOM: "bar g",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.heatingSteamMinimumPressure,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Heating steam maximum pressure:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.heatingSteamMaximumPressure,
            purchaserReqUOM: "bar g",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.heatingSteamMaximumPressure,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Cooling water maximum inlet temperature:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.coolingWaterMaximumInletTemperature,
            purchaserReqUOM: "°C",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.coolingWaterMaximumInletTemperature,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Cooling water design temperature:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.coolingWaterDesignTemperature,
            purchaserReqUOM: "°C",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.coolingWaterDesignTemperature,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Cooling water maximum inlet pressure:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.coolingWaterMaximumInletPressure,
            purchaserReqUOM: "bar g",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.coolingWaterMaximumInletPressure,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Cooling water design pressure:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.coolingWaterDesignPressure,
            purchaserReqUOM: "bar g",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.coolingWaterDesignPressure,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Cooling water type:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.coolingWaterType,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.coolingWaterType,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Fouling factor:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.foulingFactor,
            purchaserReqUOM: "m²K/kW",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.foulingFactor,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Cooling water chloride concentration:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.coolingWaterChlorideConcentration,
            purchaserReqUOM: "ppm",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.coolingWaterChlorideConcentration,
            supplierOfferedValUOM: "ppm",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Instrument air minimum pressure:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.instrumentAirMinimumPressure,
            purchaserReqUOM: "bar g",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.instrumentAirMinimumPressure,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Instrument air maximum pressure:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.instrumentAirMaximumPressure,
            purchaserReqUOM: "bar g",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.instrumentAirMaximumPressure,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
}
