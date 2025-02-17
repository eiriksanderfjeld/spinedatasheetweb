import { useCurrentUser, useFusionEnvironment } from "@equinor/fusion"
import { FC } from "react"
import { BrowserRouter } from "react-router-dom"
import { buildConfig, StoreAppScope } from "./api/config"
import { ResolveConfiguration } from "./api/environmentConfig"
import AppRouter from "./AppRouter"
import { ModuleRegistry, SideBarDef } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import { FiltersToolPanelModule } from '@ag-grid-enterprise/filter-tool-panel';
import { useAgGridStyles } from "@equinor/fusion-react-ag-grid-addons"

ModuleRegistry.registerModules([ClientSideRowModelModule, ColumnsToolPanelModule, FiltersToolPanelModule]);


const AppComponent: FC = () => {
    useAgGridStyles()

    const fusionEnvironment = useFusionEnvironment()

    const basename = "/apps/spinedatasheet"

    const currentUser = useCurrentUser()

    if (!currentUser) {
        return <div>User not logged in</div>
    }

    const config = ResolveConfiguration(fusionEnvironment.env)
    //const config = ResolveConfiguration("CI")

    buildConfig(config.REACT_APP_API_BASE_URL)
    StoreAppScope(config.BACKEND_APP_SCOPE[0])

    return (
        <BrowserRouter basename={basename}>
            <AppRouter />
        </BrowserRouter>
    )
}

export default AppComponent
