import React from 'react';
import PageHeaderStyle from './PageHeader.module.css';

function PageHeader(props) {
    return <div className={PageHeaderStyle.row}>
        <div className={PageHeaderStyle.pageHeader}>
            {props.title}
        </div>
        {/* 分类选择 */}
    </div>;
}

export default PageHeader;
