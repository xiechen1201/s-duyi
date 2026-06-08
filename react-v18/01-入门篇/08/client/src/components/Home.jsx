import React, { useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { getStudentListAPI } from '../api/student';
import Alert from './Alert';

function Home(props) {
    const location = useLocation();
    const [alertInfo, setAlertInfo] = useState({});
    const [stuList, setStuList] = useState([]);
    const [searchStr, setSearchStr] = useState('');
    const [tempList, setTempList] = useState([]);

    // 这里需要添加依赖项为空，否则会无限循环
    useEffect(() => {
        getStudentListAPI().then(({ data }) => {
            setStuList(data);
            setTempList(data);
        });
    }, []);

    useEffect(() => {
        location.state && setAlertInfo({ ...location.state });
    }, [location]);

    const alertEL = alertInfo ? <Alert {...alertInfo} /> : null;

    function onChangeInput(event) {
        let str = event.target.value;

        setSearchStr(str);
        const data = tempList.filter((el) => el.name.includes(str));
        setStuList(data);
    }

    return (
        <div>
            {alertEL}
            <h1>学生列表</h1>
            <input
                className='form-control'
                type='text'
                placeholder='搜索学生'
                value={searchStr}
                onChange={onChangeInput}
            />
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>姓 名</th>
                        <th>年 龄</th>
                        <th>联系方式</th>
                        <th>操 作</th>
                    </tr>
                </thead>
                <tbody>
                    {stuList.map((el, index) => {
                        return (
                            <tr key={index}>
                                <td>{el.name}</td>
                                <td>{el.age}</td>
                                <td>{el.phone}</td>
                                <td>
                                    <button type='button' className='btn btn-primary'>
                                        <NavLink to={`/detail/${el.id}`}>详 情</NavLink>
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Home;
