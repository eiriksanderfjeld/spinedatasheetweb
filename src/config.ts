import { AppModuleInitiator } from '@equinor/fusion-framework-app';
import { enableAgGrid } from '@equinor/fusion-framework-module-ag-grid';
import { enableNavigation } from '@equinor/fusion-framework-module-navigation';
import { enableContext } from '@equinor/fusion-framework-module-context';

export const configurator: AppModuleInitiator = (config: any) => {
  enableAgGrid(config);
  config.useFrameworkServiceClient('portal');
  enableNavigation(config, window.location.pathname.match(/^\/?apps/) ? '/apps/spinedatasheet' : '/');
  enableContext(config, (builder) => {
    builder.setContextType(['ProjectMaster']);
  });
};
