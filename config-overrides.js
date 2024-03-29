const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
      fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      }),
      addLessLoader({
          javascriptEnabled: true,
          modifyVars: { '@primary-color': '#000000' ,
          '@link-color': '#1890ff'},
        }),
    );

