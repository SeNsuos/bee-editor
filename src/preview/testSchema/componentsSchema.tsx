const headerSchema: object = {
    "$id": '', //声明唯一标识符
    "$schema": "http://json-schema.org/draft-07/schema#", //关键字状态，这种模式被写入草案v7规范
    "title": 'headComponent',
    "type": "object", //约束JSON元素的数据类型，必须是JSON对象
    "description": '',
    "properties": {
        "text": {
            "type": "string",
            "content": "标题"
        },
        "color": {
            "type": "string",
            "content": "#000"
        },
        "backgroundColor": {
            "type": "string",
            "content": "#fff"
        },
        "fontSize": {
            "type": "number",
            "content": 14
        }
    },
    "required": ["text", "color", "backgroundColor", "fontSize"]
}

export default headerSchema;