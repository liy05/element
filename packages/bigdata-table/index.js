import ElBigdataTable from './src/table';

/* istanbul ignore next */
ElBigdataTable.install = function(Vue) {
  Vue.component(ElBigdataTable.name, ElBigdataTable);
};

export default ElBigdataTable;
