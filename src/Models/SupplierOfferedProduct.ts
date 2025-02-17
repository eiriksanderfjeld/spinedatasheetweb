export class SupplierOfferedProduct implements Components.Schemas.SupplierOfferedProduct {
    manufacturer?: string | null;
            modelNumber?: string | null;
            equipmentManufacturerSerialNumber?: string | null;
            minimumAmbientTemperature?: number | null; // int32
            maximumAmbientTemperature?: number | null; // int32
            pressureRetainingBoltMaterial?: string | null;
            pressureRetainingNutMaterial?: string | null;
            silRating?: string | null;
            ingressProtection?: string | null;
            exProtection?: string | null;
            hazardousAreaClassificationStandard?: string | null;
            explosionHazardClassification?: string | null;
            explosionGroup?: string | null;
            temperatureClass?: string | null;
            bodyElementSensorManufacturerModelNumber?: string | null;
            bodyMaterial?: string | null;
            coriolisTubeMaterial?: string | null;
            coriolisTubeType?: string | null;
            flangeMaterial?: string | null;
            linerMaterial?: string | null;
            coilCoverMaterial?: string | null;
            junctionBoxMaterial?: string | null;
            electrodeType?: string | null;
            electrodeMaterial?: string | null;
            meterMinimumConductivity?: number | null; // double
            groundingRing?: boolean | null;
            groundingRingMaterial?: string | null;
            liningProtector?: string | null;
            bodySize?: number | null; // double
            endConnectionSize?: number | null; // double
            endConnectionFlangeType?: string | null;
            endConnectionFlangeRating?: string | null;
            transmitterModelNumber?: string | null;
            transmitterEnclosureMaterial?: string | null;
            transmitterMounting?: string | null;
            transmitterDisplay?: string | null;
            transmitterConnectingCables?: string | null;
            transmitterConnectingCableLength?: number | null; // double
            transmitterConnectingCableQuantity?: number | null; // int32
            supplyVoltage?: string | null;
            externalPowerVoltage?: string | null;
            isolatedOutputs?: string | null;
            cableEntry?: string | null;
            cableTermination?: string | null;
            communicationProtocol?: string | null;
            protocolVersion?: string | null;
            failSafeDirection?: string | null;
            calibrationBespoke?: string | null;
            measurementRangeMinimum?: number | null; // double
            measurementRangeMaximum?: number | null; // double
            spanAndZeroAdjustment?: string | null;
            lowerRangeLimit?: number | null; // double
            upperRangeLimit?: number | null; // double
            accuracy?: string | null;
            repeatability?: number | null; // double
            stepResponse?: number | null; // double
            longTermDrift?: number | null; // double
            longTermStability?: string | null;
            vibration?: string | null;
            weatherEnclosure?: string | null;
            mountingBracket?: string | null;
            mountingBracketMaterial?: string | null;
            electricalSurgeProtector?: string | null;
            sunshade?: string | null;
            codeRequirement?: number | null; // int32
            conformityAssessmentSystemLevel?: number | null; // int32
            tagNumber?: string | null;
            serviceDescription?: string | null;
            projectCountry?: string | null;
            projectRegion?: string | null;
            plantEnvironmentalLocation?: string | null;
            pidNumber?: string | null;
            lineOrEquipmentNumber?: string | null;
            baseConditions?: string | null;
            baseTemperature?: number | null; // int32
            basePressure?: number | null; // int32
            coatingDurability?: string | null;
            upstreamHighSidePipeSchedule?: string | null;
            upstreamHighSideLineSize?: string | null;
            upstreamHighSideLineEquipmentRating?: string | null;
            upstreamHighSideLineConnectionType?: string | null;
            upstreamHighSideConnectionOrientation?: string | null;
            upstreamHighSideMaterialType?: string | null;
            designPressureMaximum?: number | null; // int32
            designPressureMinimum?: number | null; // int32
            designTemperatureMaximum?: number | null; // int32
            designTemperatureMinimum?: number | null; // int32
            sourServiceSpecification?: string | null;
            processFluids?: string | null;
            processFluidState?: string | null;
            serviceDescription2?: string | null;
            processFluidCorrosiveCompounds?: string | null;
            processFluidErosionPossibility?: string | null;
            processFluidConductivity?: number | null; // int32
            processFluidSpecificHeatRatio?: number | null; // double
            processVacuumPossibility?: boolean | null;
            processFluidVapourPressure?: string | null;
            minimumOperatingVolumetricFlow?: number | null; // int32
            minimumOperatingVelocity?: number | null; // int32
            minimumOperatingTemperature?: number | null; // int32
            minimumOperatingPressure?: number | null; // int32
            normalOperatingVolumetricFlow?: number | null; // int32
            normalOperatingVelocity?: number | null; // double
            normalOperatingTemperature?: number | null; // int32
            normalOperatingPressure?: number | null; // double
            normalOperatingLiquidSpecificGravity?: number | null; // double
            normalOperatingLiquidViscosity?: number | null; // double
            maximumOperatingVolumetricFlow?: string | null;
            maximumOperatingVelocity?: string | null;
            maximumOperatingTemperature?: string | null;
            maximumOperatingPressure?: string | null;
            maximumOperatingLiquidSpecificGravity?: string | null;
            maximumOperatingLiquidViscosity?: string | null;
            maximumOperatingVapourMolecularWeight?: string | null;
            maximumOperatingVapourCompressibilityFactor?: string | null;
            maximumOperatingVapourActualDensity?: string | null;
            maximumOperatingVapourViscosity?: string | null;
            maximumRecoverablePressureDrop?: string | null;
            maximumUnrecoverablePressureLoss?: string | null;
            coriolisOuterCasingMaterial?: string | null;
            coriolisOuterCasingBurstPressure?: string | null;
            ruptureDiscBurstPressure?: string | null;
            processSecondaryContainment?: string | null;

    constructor(init?: Partial<SupplierOfferedProduct>) {
        Object.assign(this, init);
    }
}