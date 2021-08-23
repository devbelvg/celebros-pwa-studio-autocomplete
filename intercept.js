const moduleOverrideWebpackPlugin = require('./moduleOverrideWebpackPlugin');
const componentOverrideMapping = require('./componentOverrideMapping');

module.exports = targets => {
    targets.of('@magento/pwa-buildpack').specialFeatures.tap(flags => {
        flags[targets.name] = { esModules: true, cssModules: true };
    });
    
    targets.of('@magento/pwa-buildpack').webpackCompiler.tap(compiler => {
        new moduleOverrideWebpackPlugin(componentOverrideMapping).apply(compiler);
    })
}
