import {CSS_TYPE} from './type'

const family = [
	{
		key: 'PingFangSC-Medium',
		label: 'PingFangSC-Medium',
	},
	{
		key: 'PingFangSC-Regular',
		label: 'PingFangSC-Regular',
	},
	{
		key: 'SimSun',
		label: '宋体',
	},
	{
		key: 'SimHei',
		label: '黑体',
	},
	{
		key: 'Microsoft YaHei',
		label: '微软雅黑',
	},
	{
		key: 'Microsoft JhengHei',
		label: '微软正黑体',
	},
	{
		key: 'NSimSun',
		label: '新宋体',
	},
	{
		key: 'PMingLiU',
		label: '新细明体',
	},
	{
		key: 'MingLiU',
		label: '细明体',
	},
	{
		key: 'DFKai-SB',
		label: '标楷体',
	},
	{
		key: 'FangSong',
		label: '仿宋',
	},
	{
		key: 'KaiTi',
		label: '楷体',
	},
	{
		key: 'FangSong_GB2312',
		label: '仿宋_GB2312',
	},
	{
		key: 'KaiTi_GB2312',
		label: '楷体_GB2312',
	},
]
const weight = [
	'normal',
	'bold',
	'bolder',
	'light',
	'lighter',
	100,
	200,
	300,
	400,
	500,
	600,
	700,
	800,
	900,
	'inherit',
]
const size = ['12', '14', '16', '18', '20', '28', '36', '48', '72']

const fontFamily = {
	label: '字体',
	labelSpan: 0,
	valueSpan: 24,
	span: 24,
	type: CSS_TYPE.enum,
	props: {
		enumData: family,
		placeholder: '请选择字体',
	},
}

const fontWeight = {
	label: '粗细',
	labelSpan: 0,
	valueSpan: 24,
	span: 12,
	type: CSS_TYPE.enum,
	props: {
		enumData: weight,
		placeholder: '请选择文字粗细',
	},
}

const fontSize =  {
	label: '字体大小',
	labelSpan: 0,
	valueSpan: 24,
	span: 6,
	type: CSS_TYPE.enum,
	props: {
		enumData: size,
		placeholder: '请输入或者选择字体大小',
	},
}

const color = {
	label: '字体颜色',
	span: 6,
	labelSpan: 0,
	valueSpan: 24,
	type: CSS_TYPE.string,
	props: {
		isShowInput: false,
		isFont: true,
		isShowColor: true,
		colorColProps: { span: 24 },
	},
}

const lineHeight = {
	label: '文本行高',
	labelPlace: 'bottom',
	span: 12,
	labelSpan: 0,
	valueSpan: 24,
	type: CSS_TYPE.number,
	props: {
		hasUnit: true,
	},
}

const letterSpacing = {
	label: '文本间隔',
	labelPlace: 'bottom',
	span: 12,
	labelSpan: 0,
	valueSpan: 24,
	type: CSS_TYPE.number,
	props: {
		hasUnit: true,
	},
}

const font = {
	fontFamily,
	fontWeight,
	fontSize,
	color,
	lineHeight,
	letterSpacing
}
export default font
