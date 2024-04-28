import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getIssueByPageApi } from '../../api/issues';

import { Pagination } from 'antd';
import PageHeader from '../../components/PageHeader/PageHeader';
import IssueItem from '../../components/IssueItem/IssueItem';
import AddIssueBtn from '../../components/AddIssueBtn/AddIssueBtn';
import Recommend from '../../components/Recommend/Recommend';
import ScoreRank from '../../components/ScoreRank/ScoreRank';
import TypeSelect from '../../components/TypeSelect/TypeSelect';
import IssuesStyle from './Issues.module.css';

function Issues(props) {
    let { issueTypeId } = useSelector((state) => state.type);

    let [issueList, setIssueList] = useState([]);
    let [page, setPage] = useState({
        currentPage: 1,
        pageSize: 10,
        total: 0
    });

    useEffect(() => {
        getIssuesList();
        async function getIssuesList() {
            let params = {
                current: page.currentPage,
                pageSize: page.pageSize,
                issueStatus: true
            };
            if (issueTypeId !== 'all') {
                params.typeId = issueTypeId;
                params.current = 1;
            }

            try {
                let result = await getIssueByPageApi(params);

                setIssueList(result.data);
                setPage({
                    currentPage: page.currentPage,
                    pageSize: page.pageSize,
                    total: result.count
                });
            } catch (error) {}
        }
    }, [page.currentPage, page.pageSize, issueTypeId]);

    // 处理翻页
    function onChangePagination(current, pageSize) {
        setPage({
            currentPage: current,
            pageSize: pageSize,
            total: page.total
        });
    }

    let issueListDOM = issueList.map((item, index) => {
        return <IssueItem key={index} issueInfo={item} />;
    });

    return (
        <div className={IssuesStyle.container}>
            <PageHeader title='问答列表'>
                <TypeSelect />
            </PageHeader>
            <div className={IssuesStyle.issueContainer}>
                <div className={IssuesStyle.leftSide}>
                    {issueListDOM}
                    {issueListDOM.length > 0 ? (
                        <div className='paginationContainer'>
                            <Pagination
                                showQuickJumper
                                defaultCurrent={1}
                                total={page.total}
                                onChange={onChangePagination}
                            />
                        </div>
                    ) : (
                        <div className={IssuesStyle.noIssue}>
                            有问题，就来 coder station!
                        </div>
                    )}
                </div>
                <div className={IssuesStyle.rightSide}>
                    <AddIssueBtn />
                    <Recommend />
                    <ScoreRank />
                </div>
            </div>
        </div>
    );
}

export default Issues;
