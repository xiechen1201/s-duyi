import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import ScoreRankItem from '../ScoreRankItem/ScoreRankItem';
import { getUserByPointsRankApi } from '../../api/user';

function ScoreRank(props) {
    let [userRankList, setUserRankList] = useState([]);

    useEffect(() => {
        getRankList();
        function getRankList() {
            getUserByPointsRankApi()
                .then((result) => {
                    setUserRankList(result);
                })
                .catch(() => {});
        }
    }, []);

    let ScoreRankListDOM = userRankList.map((item, index) => {
        return <ScoreRankItem key={index} rankIndex={index + 1} rankInfo={item} />;
    });

    return (
        <Card title='积分排行榜' style={{ marginTop: '30px' }}>
            {ScoreRankListDOM}
        </Card>
    );
}

export default ScoreRank;
