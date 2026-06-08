import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getStudentDetailAPI, delStudentAPI } from '../api/student';

function Detail(props) {
    const { id } = useParams();
    const navigate = useNavigate();
    let [stuInfo, setStuInfo] = useState({});

    // 根据 id 获取学生的详细信息
    useEffect(() => {
        getStudentDetailAPI(id).then((res) => {
            setStuInfo(res.data);
        });
    }, [id]);

    function deleteStu(id) {
        const isDel = window.confirm('确定要删除吗？');

        if (isDel) {
            delStudentAPI(id).then(() => {
                navigate('/home', {
                    state: {
                        type: 'success',
                        message: '用户删除成功'
                    }
                });
            });
        }
    }

    return (
        <div>
            <button className='btn btn-default' onClick={() => navigate('/home')}>
                返回
            </button>
            <h1 className='page-header'>
                {stuInfo.name}
                <span className='pull-right'>
                    <button
                        className='btn btn-primary'
                        onClick={() => navigate(`/edit/${stuInfo.id}`)}
                        style={{ marginRight: 10 }}>
                        修改
                    </button>
                    <button
                        className='btn btn-danger'
                        onClick={() => deleteStu(stuInfo.id)}>
                        删除
                    </button>
                </span>
            </h1>

            {/* 第一组 */}
            <ul className='list-group'>
                <li className='list-group-item'>
                    <span className='glyphicon glyphicon-phone'>
                        电话：{stuInfo.phone}
                    </span>
                </li>
                <li className='list-group-item'>
                    <span className='glyphicon glyphicon-envelope'>
                        邮箱：{stuInfo.email}
                    </span>
                </li>
            </ul>
            {/* 第二组 */}
            <ul className='list-group'>
                <li className='list-group-item'>
                    <span className='glyphicon glyphicon-book'>
                        文化水平：{stuInfo.education}
                    </span>
                </li>
                <li className='list-group-item'>
                    <span className='glyphicon glyphicon-flag'>
                        毕业院校：{stuInfo.graduationschool}
                    </span>
                </li>
                <li className='list-group-item'>
                    <span className='glyphicon glyphicon-briefcase'>
                        专业：{stuInfo.profession}
                    </span>
                </li>
                <li className='list-group-item'>
                    <span className='glyphicon glyphicon-user'>
                        个人简介：{stuInfo.profile}
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default Detail;
