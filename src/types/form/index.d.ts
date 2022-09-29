// import type { FieldRule } from 'vant'

// declare module FormModule {
//   /**
//    * Form表单字段类型枚举
//    */
//   export enum FormColumnType {
//     static = 'static',
//     /**
//      * 文本框
//      */
//     text = 'text',
//     textarea = 'textarea',
//     select = 'select',
//     editor = 'editor',
//     /**
//      * 数值框
//      */
//     number = 'number',
//     image = 'image',
//     video = 'video',
//     audio = 'audio',
//     date = 'date',
//     daterange = 'daterange'
//   }

//   /**
//    * Form 表单字段正则验证规则设置
//    */
//   export type FormColumnRule = FieldRule

//   /**
//    * Form表单字段项设置
//    */
//   abstract class FormColumn {
//     /**
//      * 字段项类型
//      */
//     type: string

//     /**
//      * 字段名称与后台对接名称
//      */
//     name: string

//     /**
//      * 前端展示字段名称
//      */
//     label: string

//     /**
//      *
//      */
//     rules?: Array<FormColumnRule>

//     /**
//      * 是否必填字段
//      */
//     required?: boolean

//     placeholder?: string

//     /**
//      * 是否显示次字段
//      */
//     candisplay?: boolean

//     /**
//      * 默认值设置
//      */
//     defaultvalue?: any
//   }

//   /**
//    * 文本框
//    */
//   export class FormTextColumn extends FormColumn {
//     // minlength?: number;

//     /**
//      * 字符串最大长度
//      */
//     maxlength?: number

//     /**
//      * 是否显示字符串长度限制
//      */
//     showwoldlimit?: boolean

//     changeFunction?: Function

//     /**
//      * 是否只读
//      */
//     readonly?: boolean

//     /**
//      * 右侧小图标
//      */
//     rightIcon?: string

//     /**
//      * 右侧文本
//      */
//     append?: string

//     constructor() {
//       super()
//       this.required = false
//       this.showwoldlimit = false
//     }
//   }

//   /**
//    * 文本域
//    */
//   export class FormTextAreaColumn extends FormColumn {
//     rows: number
//   }

//   export class FormNumberColumn extends FormColumn {
//     /**
//      * 字符串最大长度
//      */
//     maxlength?: number

//     /**
//      * 是否显示字符串长度限制
//      */
//     showwoldlimit?: boolean

//     changeFunction?: Function

//     /**
//      * 是否只读
//      */
//     readonly?: boolean

//     /**
//      * 右侧小图标
//      */
//     rightIcon?: string

//     /**
//      * 右侧文本 后缀字符
//      */
//     append?: string

//     /**
//      *
//      */
//     inputAlign?: string

//     isLink?: boolean

//     /**
//      * 小数点后的位数
//      */
//     precision?: number

//     /** *
//      * right-icon 点击事件
//      */
//     clickLink?: Function

//     /**
//      * disabled 禁用 颜色变浅
//      */
//     disabled?: boolean
//   }

//   /**
//    * 下拉选择
//    */
//   export class FormSelectColumn extends FormColumn {
//     dictionary: string | Array<any>

//     default: string | number

//     changeFunction?: Function
//   }

//   /** *
//    *
//    * 图片上传
//    *
//    */
//   export class FormImgUplpadColumn extends FormColumn {
//     /**
//      * 上传几张
//      */
//     maxcount: number

//     display?: boolean

//     constructor() {
//       super()
//       this.maxcount = 1
//     }
//   }

//   export class FormStaticColumn extends FormColumn {}

//   export class FormDateColumn extends FormColumn {
//     /**
//      * 日期显示格式
//      */
//     displayformat?: string

//     format: FormDateFormat

//     minDate: Date

//     maxDate: Date
//   }

//   export type FormDateFormat = 'yyyy-MM-dd HH:mm:ss' | 'yyyy-MM-dd' | 'yyyy年MM月dd日'

//   export type FormInputCommon =
//     | FormTextAreaColumn
//     | FormTextColumn
//     | FormSelectColumn
//     | FormStaticColumn
//     | FormImgUplpadColumn
// }
