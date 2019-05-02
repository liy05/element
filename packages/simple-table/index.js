import ElSimpleTable from './src/simple-table';

/* istanbul ignore next */
ElSimpleTable.install = function(Vue) {
  Vue.component(ElSimpleTable.name, ElSimpleTable);
};

export default ElSimpleTable;
