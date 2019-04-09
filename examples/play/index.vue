<template>
        <el-table
          v-loading="listLoading"
          :data="list"
          row-key="id"
          border
          :isTreeExpandAll="true"
          fix
          height="150"
        >
          <el-table-column  label="项目分期名称">
            <template slot-scope="scope">{{ scope.row.name }}</template>
          </el-table-column>
          <el-table-column label="版本名称">
            <template slot-scope="scope">{{ scope.row.versionName }}</template>
          </el-table-column>
          <el-table-column label="所属公司">
            <template slot-scope="scope">{{ scope.row.buName }}</template>
          </el-table-column>
          <el-table-column label="审核状态">
            <template slot-scope="scope">{{ scope.row.approveState }}</template>
          </el-table-column>
          <el-table-column label="编制人">
            <template slot-scope="scope">{{ scope.row.creationName }}</template>
          </el-table-column>
          <el-table-column label="编制日期">
            <template slot-scope="scope">
              {{ scope.row.creationTime}}
              <!-- {{moment(scope.row.creationTime,"MM-DD-YYYY")}} -->
            </template>
          </el-table-column>
          <!-- <el-table-column width="250px" label="操作">
            <template slot-scope="scope">
              <el-button
                type="primary"
                size="mini"
              >选择</el-button>
            </template>
          </el-table-column> -->
        </el-table>
</template>

<script>

export default {
  name:'ProjectSelect',
  data(){
    return {
      projectname:undefined,
      listLoading:false,
      pageLoading:false,
      total: null,
      limit: 10,
      currentPage: 1,
      list:[{
        id:'1',
        name:'君御城一期',
        versionName:'',
        buName:'江西力高',
        approveState:'1',
        creationName:'系统管理员',
        creationTime:'2018-01-01',
        children:[{
          id:'2',
          name:'',
          versionName:'启动版',
          buName:'江西力高',
          approveState:'1',
          creationName:'系统管理员',
          creationTime:'2018-01-01',
        },
        {
          id:'3',
          name:'',
          versionName:'投资版',
          buName:'江西力高',
          approveState:'1',
          creationName:'系统管理员',
          creationTime:'2018-01-02',
        }
        ]

      }]
    }
  },
  computed: {
    // tableHeight:function(){
    //   return this.clientHeight -220
    // },
    listQuery: function() {
      return {
        page: this.currentPage - 1,
        name: this.name,
        filter: this.name,
        maxResultCount: this.limit,
        skipCount: (this.currentPage - 1) * this.limit,
        sorting: undefined
      }
    },
  },
  methods:{
    initPage(){

    }
  }
}
</script>

