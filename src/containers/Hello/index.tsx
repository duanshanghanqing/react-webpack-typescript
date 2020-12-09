import React from 'react';
// import { Button, Menu, Upload, MyTest, Transition } from 'typescript-vikingship';
// import 'typescript-vikingship/lib/index.css';
// const { MenuItem, SubMenu } = Menu;

interface Iprops {
}

interface Istate {
    showLeft: boolean;
    showTop: boolean;
}

class Hello extends React.Component<Iprops, Istate> {
    constructor(props) {
        super(props);
        this.state = {
            showLeft: false,
            showTop: false,
        };
    }

    render() {
        const defaultFileList = [
            //   { uid: '123', size: 1234, name: 'hello.md', status: 'uploading', percent: 30 },
            { uid: '122', size: 1234, name: 'xyz.md', status: 'success', percent: 30 },
            { uid: '121', size: 1234, name: 'eyiha.md', status: 'error', percent: 30 }
        ];
        const { showLeft, showTop } = this.state;
        return (
            <div>
                {/* <Button>12</Button>
                <br />
                <Menu defaultIndex='0' onSelect={(index) => { console.log(index); }} defaultOpenSubMenus={['3']}>
                    <MenuItem>active</MenuItem>
                    <MenuItem disabled={true}>disabled</MenuItem>
                    <MenuItem>xyz</MenuItem>
                    <SubMenu title="download">
                        <MenuItem>download1</MenuItem>
                        <MenuItem>download2</MenuItem>
                    </SubMenu>
                </Menu>
                <br />
                <Upload
                    defaultFileList={defaultFileList}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    multiple={true}
                    drag={true}
                    onProgress={(percentage, file) => {
                        console.log(percentage, file);
                    }}
                    onChang={(info, err, fileDataList) => {
                        console.log(info, err, fileDataList);
                    }}
                    beforeUpload={(file) => {
                        // 上传前检测文件大小
                        // const kb = Math.round(file.size / 1024);
                        // if (kb > 100) {
                        //     console.warn('文件不能大于100kb');
                        //     return false;
                        // }
                        // return true;

                        return new Promise((resolve, reject) => {
                            const kb = Math.round(file.size / 1024);
                            if (kb > 10000000) {
                                console.warn('文件不能大于100kb');
                                reject('文件不能大于100kb');
                            } else {
                                resolve(file);
                            }
                        });
                    }}
                >
                    <Button>选择文件</Button>
                </Upload>
                <br />
                <MyTest />
                <br />
                <Button onClick={() => { this.setState({ showLeft: !showLeft }); }}>切换动画-zoom-in-left</Button>
                <Transition
                    in={showLeft}
                    timeout={300}
                    animation="zoom-in-left"
                    wrapper={true}
                >
                    <>
                        <h1>java</h1>
                        <h1>javascript</h1>
                        <h1>go</h1>
                        <h1>php</h1>
                        <h1>node</h1>
                    </>
                </Transition> */}
            </div>
        );
    }
}

export default Hello;
