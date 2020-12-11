const headerSchema:object = {
    "title": 'headComponent',
    "type": "object",
    "properties": {
        "text": {
            "type": "string",
            "content": "我是大标题"
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