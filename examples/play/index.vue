<template>
  <div class="app-container projectselect" style="min-width:1024" v-loading="pageLoading">
    <div class="filter-container">
      <el-input
        v-model="projectname"
        @keyup.enter.native="initPage"
        placeholder="请输入项目名称"
        style="width: 400px;vertical-align: middle;margin-bottom: 10px;"
        class="input-with-select"
      >
        <el-button slot="append" type="primary" @click="initPage" icon="el-icon-search"/>
      </el-input>
    </div>
    <el-row :gutter="6">
      <el-col :span="24">
        <el-table
          v-loading="listLoading"
          style="width: 99%"
          :data="list"
          border
          fit
          row-key="id"
          :isTreeExpandAll="true"
        >
          <el-table-column min-width="150px" label="项目分期名称">
            <template slot-scope="scope">{{ scope.row.name }}</template>
          </el-table-column>
          <el-table-column min-width="150px" label="版本名称">
            <template slot-scope="scope">{{ scope.row.versionName }}</template>
          </el-table-column>
          <el-table-column label="所属公司">
            <template slot-scope="scope">{{ scope.row.buName }}</template>
          </el-table-column>
          <el-table-column label="审核状态">
            <template slot-scope="scope">{{ scope.row.approveState | stateFilter }}</template>
          </el-table-column>
          <el-table-column label="编制人">
            <template slot-scope="scope">{{ scope.row.creationName }}</template>
          </el-table-column>
          <el-table-column label="编制日期">
            <template slot-scope="scope">
              {{ scope.row.creationTime | moment("YYYY-MM-DD HH:MM:SS") }}
              <!-- {{moment(scope.row.creationTime,"MM-DD-YYYY")}} -->
            </template>
          </el-table-column>
          <el-table-column width="250px" label="操作">
            <template slot-scope="scope">
              <el-button
                type="primary"
                size="mini"
              >选择</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination-container">
          <el-pagination
            :current-page="currentPage"
            :page-sizes="[10,20,30,50]"
            :page-size="limit"
            :total="total"
            background
            layout="total, sizes, prev, pager, next, jumper"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </el-col>
    </el-row>
  </div>
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

