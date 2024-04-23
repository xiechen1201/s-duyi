import { useEffect, useState } from 'react';
import IssuesStyle from './Issues.module.css';
import { Pagination } from 'antd';
import PageHeader from '../../components/PageHeader/PageHeader';
import IssueItem from '../../components/IssueItem/IssueItem';
import { getIssueByPageApi } from '../../api/issues';

function Issues(props) {
    let [issueList, setIssueList] = useState([]);
    let [page, setPage] = useState({
        currentPage: 1,
        pageSize: 10,
        total: 0
    });

    useEffect(() => {
        getIssuesList();
        async function getIssuesList() {
            let result = await getIssueByPageApi({
                current: page.currentPage,
                pageSize: page.pageSize,
                issueStatus: true
            });

            setIssueList(result.data);
            setPage({
                currentPage: page.currentPage,
                pageSize: page.pageSize,
                total: result.count
            });
        }
    }, [page.currentPage, page.pageSize]);

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
            <PageHeader title='问答列表' />
            <div className={IssuesStyle.issueContainer}>
                <div className={IssuesStyle.leftSide}></div>
                <div className={IssuesStyle.rightSide}></div>
            </div>
            {issueListDOM}
            <div className='paginationContainer'>
                <Pagination
                    showQuickJumper
                    defaultCurrent={1}
                    total={page.total}
                    onChange={onChangePagination}
                />
            </div>
        </div>
    );
}

export default Issues;
