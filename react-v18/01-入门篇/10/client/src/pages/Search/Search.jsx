import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import PageHeader from '../../components/PageHeader/PageHeader';
import AddIssueBtn from '../../components/AddIssueBtn/AddIssueBtn';
import Recommend from '../../components/Recommend/Recommend';
import ScoreRank from '../../components/ScoreRank/ScoreRank';
import SearchStyle from './Search.module.css';

function Search(props) {
    let location = useLocation();

    useEffect(()=>{

    },[location.state])

    return (
        <div className={SearchStyle.container}>
            <PageHeader title='搜索结果' />
            <div className={SearchStyle.searchPageContainer}>
                <div className={SearchStyle.leftSide}></div>
                <div className={SearchStyle.rightSide}>
                    <AddIssueBtn />
                    <Recommend />
                    <ScoreRank />
                </div>
            </div>
        </div>
    );
}

export default Search;
