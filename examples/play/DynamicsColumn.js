import EditGridItem from './EditGridItem'

// 生成动态表头配置
export default {
  name: 'DynamicsColumn',

  components: {
    EditGridItem
  },

  props: {
    currentYear: {
      type: Number,
      default: 2019
    },
    year: {
      type: Number,
      default: 4
    },
    wd: {
      type: String,
      default: '季度'
    },
    columnConfigs: {
      type: Object
    }
  },

  render(h) {
    const columns = this.dynamicsColumn
    const columnsNodes = columns.map(item => {
      return this.renderChildrenColumn(item)
    })
    return (
      <el-table-column
            label="供货面积(平米)"
          >
        {
          columnsNodes
        }
      </el-table-column>
    )
  },

  computed: {
    wdArr() {
      if (this.wd === '年度') {
        return []
      } else if (this.wd === '季度') {
        return ['一季度', '二季度', '三季度', '四季度']
      } else {
        return [
          '一月',
          '二月',
          '三月',
          '四月',
          '五月',
          '六月',
          '七月',
          '八月',
          '九月',
          '十月',
          '十一月',
          '十二月'
        ]
      }
    },
    dynamicsColumn() {
      // 动态列
      // 供货面积和供货金额两类
        const arrYear = []
        // 第二级 年份
        arrYear.push({
          label: `${this.currentYear}年前`,
          children: [],
          prop: `${this.columnConfigs.prop}_${this.currentYear}年前`
        })
        for (let i = 0; i < this.year; i++) {
          const objYear = {
            label: `${this.currentYear + i}年`,
            children: [],
            prop: `${this.columnConfigs.prop}_${this.currentYear + i}年`
          }
          // 第三级 填写维度
          this.wdArr.forEach(wditem => {
            objYear.children.push({
              label: wditem,
              prop: `${this.columnConfigs.prop}_${this.currentYear + i}年_${wditem}`
            })
          })
          arrYear.push(objYear)
        }
        arrYear.push({
          label: `${this.currentYear + this.year - 1}年后`,
          children: [],
          prop: `${this.columnConfigs.prop}_${this.currentYear + this.year - 1}年后`
        })

      return arrYear
    },
  },

  data() {
    return {
    }
  },

  created() {
  },

  methods: {
    renderChildrenColumn(columnConfig) {
      // 递归方法，生成子级的Column配置
      const columNode = (
        <el-table-column
          label={columnConfig.label}
          key={`${this.wd}_${this.year}_${columnConfig.prop}`}
          align='center'
          {
            ...{
            scopedSlots: {
                default: props => {
                  if (!columnConfig.children || columnConfig.children.length === 0) {
                    // return (<edit-grid-item
                    //     value={props.row[columnConfig.prop]}
                    //     eslint-disable-next-line no-return-assign
                    //     on-input={ val => props.row[columnConfig.prop] = val }
                    //     isEdit={true}
                    //   ></edit-grid-item>)
                    return (<span>{props.row[columnConfig.prop]}</span>)
                  }
                }
              }
            }
          }
          >
          {(columnConfig.children && columnConfig.children.length > 0)
                  ? columnConfig.children.map(twoitem => {
            return (this.renderChildrenColumn(twoitem))
            }) : ''}
        </el-table-column>
      )
      return columNode
    }
  }
}
