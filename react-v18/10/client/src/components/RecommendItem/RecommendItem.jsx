import React from 'react';
import RecommendItemStyle from './RecommendItem.module.css';

function RecommendItem(props) {
    return (
        <a
            className={RecommendItemStyle.container}
            href={props.recommendInfo.href}
            target='_blank'
            rel='noreferrer'>
            <div className={RecommendItemStyle.leftSide}>{props.recommendInfo.num}</div>
            <div className={RecommendItemStyle.rightSide}>
                {props.recommendInfo.title}
            </div>
        </a>
    );
}

export default RecommendItem;
