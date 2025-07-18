import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { formatDate } from '../../utils/index';
import { getIssueByIdApi } from '../../api/issues';
import { getUserByIdApi } from '../../api/user';

import IssueDetailStyle from './IssueDetail.module.css';
import { Avatar } from 'antd';
import PageHeader from '../../components/PageHeader/PageHeader';
import Recommend from '../../components/Recommend/Recommend';
import ScoreRank from '../../components/ScoreRank/ScoreRank';
import Discuss from '../../components/Discuss/Discuss';

function IssueDetail(props) {
    let params = useParams();

    let [issueDetail, setIssueDetail] = useState({});
    let [issueUser, setIssueUser] = useState({});

    useEffect(() => {
        getIssueDetail();
        function getIssueDetail() {
            getIssueByIdApi(params.id)
                .then((res) => {
                    setIssueDetail(res);
                    getUserInfo(res);
                })
                .catch(() => {});
        }
        function getUserInfo(data) {
            getUserByIdApi(data.userId).then((res) => {
                setIssueUser(res);
            });
        }
    }, []);

    return (
        <div className={IssueDetailStyle.container}>
            <PageHeader title='问题详情' />
            <div className={IssueDetailStyle.detailContainer}>
                {/* 问答详情 */}
                <div className={IssueDetailStyle.leftSide}>
                    <div className={IssueDetailStyle.question}>
                        <h1>{issueDetail.issueTitle}</h1>
                        <div className={IssueDetailStyle.questioner}>
                            <Avatar size='small' src={'/img/' + issueUser.avatar} />
                            <span className={IssueDetailStyle.user}>
                                {issueUser.nickname}
                            </span>
                            <span>发布于：{formatDate(issueDetail.issueDate)}</span>
                        </div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: issueDetail.issueContent
                            }}></div>
                    </div>
                    <Discuss
                        commentType={1}
                        targetId={issueDetail?._id}
                        issueInfo={issueDetail}
                    />
                </div>
                {/* 推荐、排行 */}
                <div className={IssueDetailStyle.rightSide}>
                    <div style={{ margin: '20px 0' }}>
                        <Recommend />
                    </div>
                    <div style={{ margin: '20px 0' }}>
                        <ScoreRank />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IssueDetail;
