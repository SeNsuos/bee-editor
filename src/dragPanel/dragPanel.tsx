import React from 'react';
import '../style/dragPanel.scss'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';


interface RenderTree {
    id: string;
    name: string;
    children?: RenderTree[];
}

interface Tasks {
    id: number,
    content: string
}

const dataTasks: Array<Tasks> = []

const data: RenderTree = {
    id: 'root',
    name: '支持的组件',
    children: [
        {
            id: '1',
            name: '头部区示例',
            children: [
                {
                    id: '11',
                    name: '头部模板一',
                },
                {
                    id: '12',
                    name: '头部模板二',
                },
            ]
        },
        {
            id: '3',
            name: '信息区示例',
            children: [
                {
                    id: '4',
                    name: '信息模板一',
                },
                {
                    id: '5',
                    name: '信息模板二',
                },
            ],
        },
        {
            id: '7',
            name: '功能模块区示例',
            children: [
                {
                    id: '8',
                    name: '天气预报模块一',
                },
                {
                    id: '9',
                    name: '天气预报模块二',
                },
            ],
        },
    ],
};

class DragPanel extends React.Component {

    state = {
        tasksB: dataTasks,
        treeData: data
    }

    handleDropOver = (e: any) => {
        e.preventDefault();
    };

    handleDrop = (e: any) => {
        e.preventDefault();
        // 放置到目标区域
        const goalsItem = {
            // 避免id重复
            id: + new Date(),
            content: e.dataTransfer.getData("content")
        }
        console.log("mousedownItem", goalsItem)
        this.setState({
            tasksB: [...this.state.tasksB, goalsItem]
        });
    };
    handleDragStart = function (item: any, e: any) {
        e.dataTransfer.setData("content", item);
        console.log("mouseStartItem", item);
    }
    handleButtonDel = (index: any) => {
        // array.splice.splice 改变原数组
        let copyTaskB = [...this.state.tasksB]
        copyTaskB.splice(index, 1)
        this.setState({
            tasksB: copyTaskB
        })
    }
    handleButtonUp = (index: any) => {
        if (index > 0) {
            let copyTaskB = [...this.state.tasksB]
            for (let i = 0; i < copyTaskB.length; i++) {
                if (index === i) {
                    const temp = copyTaskB[index]
                    copyTaskB[index] = copyTaskB[index - 1]
                    copyTaskB[index - 1] = temp
                }
            };

            this.setState({
                tasksB: copyTaskB
            });
        }

    };
    handleButtonDown = (index: any) => {
        console.log(index)
        if (index < this.state.tasksB.length - 1) {
            let copyTaskB = [...this.state.tasksB]
            for (let i = 0; i < copyTaskB.length; i++) {
                if (index === i) {
                    const temp = copyTaskB[index]
                    copyTaskB[index] = copyTaskB[index + 1]
                    copyTaskB[index + 1] = temp
                }
            };

            this.setState({
                tasksB: copyTaskB
            });
        };
    };

    render() {
        const { tasksB } = this.state;

        const renderTree = (nodes: RenderTree) => (
            Array.isArray(nodes.children) ?
                <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name} >
                    {nodes.children.map((node) => renderTree(node))}
                </TreeItem>
                :
                <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}
                    draggable
                    onDragStartCapture={this.handleDragStart.bind(this, nodes.name)}
                >
                </TreeItem>
        );

        return (
            <div className="DragPanle">
                <div className="component-source col">
                    <h3>组件库</h3>
                    <TreeView
                        defaultCollapseIcon={<ExpandMoreIcon />}
                        defaultExpanded={['root']}
                        defaultExpandIcon={<ChevronRightIcon />}
                        style={{marginTop: '30px'}}
                    >
                        {renderTree(data)}
                    </TreeView>
                </div>

                <div
                    className="component-template col"
                    onDragOver={this.handleDropOver}
                    onDrop={this.handleDrop}
                >
                    <h3>模板组件</h3>
                    {tasksB.map((item: any, index) => {
                        return (
                            <div
                                className="box"
                                key={item.id}
                                style={{marginTop: '30px'}}
                            >
                                {item.content}
                                <IconButton className="fisrtBut" aria-label="delete" size="small" onClick={() => this.handleButtonUp(index)}>
                                    <ArrowUpward fontSize="inherit" />
                                </IconButton>
                                <IconButton aria-label="delete" size="small" onClick={() => this.handleButtonDown(index)}>
                                    <ArrowDownwardIcon fontSize="inherit" />
                                </IconButton>
                                <IconButton aria-label="delete" onClick={() => this.handleButtonDel(index)}>
                                    <DeleteIcon fontSize="small" />
                                </IconButton>
                            </div>
                        );
                    })}
                </div>

            </div>
        );
    }
}

export default DragPanel;