<template>
  <div>
    <template v-if="isEdit">
      <el-date-picker :value="value" @input="(value) => this.$emit('input',value)"
        style="width:100%"
        v-if="type==='DatePicker'"
        type="date"
        >
      </el-date-picker>
      <el-input v-else :value="value" @input="(value) => this.$emit('input',value)">
        <div
          v-if="unit!=null && unit!=''"
          slot="append"
          class="input-unit"
        >{{ unit }}</div>
      </el-input>
    </template>
    <template v-else>
      <span v-if="type==='DatePicker'"> {{value |moment("YYYY-MM-DD")}}</span>
      <span v-else> {{value}}</span>
    </template>
  </div>
  
</template>


<script>

export default {
  name:'EditGridItem',
  inheritAttrs: false,
  props:{
    isEdit:{
      type:[Boolean,Object],
      default:false
    },
    type:{
      type:String
    },
    value:{
      type:[String,Object]
    },
    userClass:{
      type:String
    },
    unit:{
      type:String
    }
  },
  data(){
    return {

    }
  }
}
</script>
