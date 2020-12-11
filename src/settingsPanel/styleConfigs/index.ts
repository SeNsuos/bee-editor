import font from './font'
import {CSS_TYPE} from './type'

export interface CssConfigType {
    [cssName: string] : {
        label: string
		span: number
		labelSpan: number
		valueSpan: number
		type: CSS_TYPE
		props: any
    }
}

const className = {
	classNameSelf: {
		label: '字体',
		labelSpan: 0,
		valueSpan: 24,
		span: 24,
		type: CSS_TYPE.string,
		props: { isShowColor: false, inputColProps: { span: 24 } },
	},
}

export default {
    font,
    className
}