import ElSimpleTable from './src/Table';

/* istanbul ignore next */
ElSimpleTable.install = function(Vue) {
  Vue.component(ElSimpleTable.name, ElSimpleTable);
};

export default ElSimpleTable;
