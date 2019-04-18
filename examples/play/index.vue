<template>
  <div>
    <!--基本信息-->
    <el-card class="editCard">
      <div
        slot="header"
        class="clearfix"
      >
        <i
          class="el-icon-tickets"
          style="color:RGB(255,204,102)"
        ></i>
        <span style="margin-left:10px;">项目开发计划</span>
      </div>
      <el-table
        :data="data"
        border
        style="width: 100%"
        :isTree="true"
        row-key="id"
      >
        <el-table-column
          file-icon="icon icon-file"
          folder-icon="icon icon-folder"
          prop="bd"
          label="标段"
          width="220"
          treeKey="bd"
          :expandAll="true"
        ></el-table-column>
        <el-table-column
          prop="bd1"
          label="产品类型"
          width="180"
          :tree="true"
        >
        </el-table-column>
        <el-table-column
          prop="bd2"
          label="产品名称"
          width="180"
          :tree="true"
        >
        </el-table-column>
        <el-table-column
          prop="bd3"
          label="楼栋"
        >
        </el-table-column>
        <!-- <el-table-column label="土地获取">
          <template slot-scope="scope">
          </template>
        </el-table-column> -->
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "DevelopmentPlan",
  data() {
    return {
      test: "222", // 模拟的数据
      ytTable: [{}], // 模拟的数据
      columns: [
        {
          title: "标段",
          key: "bd"
        },
        {
          title: "产品类型",
          key: "bd1"
        },
        {
          title: "产品名称",
          key: "bd2"
        },
        {
          title: "楼栋",
          key: "bd3"
        },
        {
          title: "土地获取",
          key: "td",
          type: "template",
          template: "td"
        }
      ],
      data: [
        {
          id:'1',
          bd: "一标段",
          bd1: "/",
          bd2: "/",
          bd3: "/",
          td: "2018-01-01",
          parent_id: null,
          children: [
            {
              id:'2',
              bd: "一标段",
              bd1: "住宅",
              bd2: "超高层",
              bd3: "1栋",
              td: "2018-01-01",
            },
            {
              id:'3',
              bd: "一标段",
              bd1: "住宅",
              bd2: "超高层",
              bd3: "2栋",
              td: "2018-01-01",
            },
            {
              id:'4',
              bd: "一标段",
              bd1: "住宅",
              bd2: "超高层",
              bd3: "3栋",
              td: "2018-01-01",
            }
          ]
        }
      ],
    };
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.formitemdiv {
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  // justify-content:center;
  margin-left: 20px;
  margin-right: 20px;
}
.formitem {
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 2px 20px;
  width: calc(33.33% - 40px);
}

.formitem_div {
  line-height: 28px;
  flex: 0 0 120px;
  font-size: small;
}
.formitemoneline {
  align-items: flex-start;
  margin: 2px 20px;
  width: calc(100% - 40px);
}
.cell-edit-input .el-input,
.el-input__inner {
  width: 100%;
}
.cell-icon {
  cursor: pointer;
  color: #fff;
}
.el-row {
  margin-bottom: 5px;
}
.formiteminline {
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  // justify-content:center;
  align-items: flex-start;
}
.fixButton {
  right: 0px;
  left: 0px;
  position: fixed;
  bottom: 0;
  background: #fff;
  z-index: 300;
  height: 47px;
  margin-top: 10px;
  padding-top: 18px;
  border: 0;
  border-top: solid 1px #e9ebee;
}
.error_span {
  color: #f56c6c;
  font-size: 12px;
  line-height: 1;
  padding-top: 4px;
  left: 0;
}
.el-card {
  overflow: unset;
}
.date_width {
  width: 245px;
}
</style>
<style lang="scss">
.editCard {
  margin-top: 10px;
  .el-card__header {
    padding: 10px 20px;
  }
}
</style>
