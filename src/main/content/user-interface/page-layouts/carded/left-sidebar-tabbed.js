import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {FusePageCarded, DemoContent, DemoSidebarContent} from '@fuse';
import {Tab, Tabs, Hidden, Icon, IconButton} from '@material-ui/core';

const styles = theme => ({
    layoutRoot   : {},
    layoutToolbar: {
        padding: 0
    },
    tabsRoot     : {
        height: 64,
        width : '100%'
    },
    tabRoot      : {
        height: 64
    }
});

class CardedLeftSidebarTabbedSample extends Component {

    state = {
        value: 0
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render()
    {
        const {classes} = this.props;
        const {value} = this.state;

        return (
            <FusePageCarded
                classes={{
                    root   : classes.layoutRoot,
                    toolbar: classes.layoutToolbar
                }}
                header={
                    <div className="flex flex-col flex-1">
                        <div className="flex items-center py-24">
                            <Hidden lgUp>
                                <IconButton
                                    onClick={(ev) => this.pageLayout.toggleLeftSidebar()}
                                    aria-label="open left sidebar"
                                >
                                    <Icon>menu</Icon>
                                </IconButton>
                            </Hidden>
                            <div className="flex-1"><h4>Header</h4></div>
                        </div>
                    </div>
                }
                contentToolbar={
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        scrollable
                        scrollButtons="auto"
                        classes={{
                            root: classes.tabsRoot
                        }}
                    >
                        <Tab
                            classes={{
                                root: classes.tabRoot
                            }}
                            label="Item One"
                        />
                        <Tab
                            classes={{
                                root: classes.tabRoot
                            }}
                            label="Item Two"
                        />
                        <Tab
                            classes={{
                                root: classes.tabRoot
                            }}
                            label="Item Three"
                        />
                        <Tab
                            classes={{
                                root: classes.tabRoot
                            }}
                            label="Item Four"
                        />
                        <Tab
                            classes={{
                                root: classes.tabRoot
                            }}
                            label="Item Five"
                        />
                        <Tab
                            classes={{
                                root: classes.tabRoot
                            }}
                            label="Item Six"
                        />
                        <Tab
                            classes={{
                                root: classes.tabRoot
                            }}
                            label="Item Seven"
                        />
                    </Tabs>
                }
                content={
                    <div className="p-24">
                        {value === 0 &&
                        (
                            <div>
                                <h3 className="mb-16">Item One</h3>
                                <DemoContent/>
                            </div>
                        )}
                        {value === 1 && (
                            <div>
                                <h3 className="mb-16">Item Two</h3>
                                <DemoContent/>
                            </div>
                        )}
                        {value === 2 && (
                            <div>
                                <h3 className="mb-16">Item Three</h3>
                                <DemoContent/>
                            </div>
                        )}
                        {value === 3 && (
                            <div>
                                <h3 className="mb-16">Item Four</h3>
                                <DemoContent/>
                            </div>
                        )}
                        {value === 4 && (
                            <div>
                                <h3 className="mb-16">Item Five</h3>
                                <DemoContent/>
                            </div>
                        )}
                        {value === 5 && (
                            <div>
                                <h3 className="mb-16">Item Six</h3>
                                <DemoContent/>
                            </div>
                        )}
                        {value === 6 && (
                            <div>
                                <h3 className="mb-16">Item Seven</h3>
                                <DemoContent/>
                            </div>
                        )}
                    </div>
                }
                leftSidebarHeader={
                    <div className="p-24"><h4>Sidebar Header</h4></div>
                }
                leftSidebarContent={
                    <div className="p-24">
                        <h4>Sidebar Content</h4>
                        <br/>
                        <DemoSidebarContent/>
                    </div>
                }
                onRef={instance => {
                    this.pageLayout = instance;
                }}
            />
        )
    };
}

export default withStyles(styles, {withTheme: true})(CardedLeftSidebarTabbedSample);
