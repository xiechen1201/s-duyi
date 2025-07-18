import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addStudentAPI, updateStudentAPI, getStudentDetailAPI } from '../api/student';

function Add(props) {
    let navigate = useNavigate();
    let { id } = useParams();

    let [stuInfo, setStuInfo] = useState({
        name: '',
        age: '',
        phone: '',
        email: '',
        education: '',
        graduationsSchool: '',
        profession: '',
        profile: ''
    });

    // 如果有 id，我们需要获取学生的详细信息
    useEffect(() => {
        if (id) {
            getStudentDetailAPI(id).then((res) => {
                setStuInfo(res.data);
            });
        }
    }, [id]);

    function updateStuInfo(newInfo, key) {
        if (key === 'age' && isNaN(newInfo)) {
            return;
        }

        const newStuInfo = {
            ...stuInfo
        };
        newStuInfo[key] = newInfo;

        setStuInfo(newStuInfo);
    }

    function onSubmitForm(event) {
        event.preventDefault();

        for (const key in stuInfo) {
            if (stuInfo[key] === '') {
                alert('请确保所有表单项都已填写！');
                return;
            }
        }

        if (!id) {
            addStudentAPI(stuInfo).then(() => {
                navigate('/home', {
                    state: {
                        type: 'success',
                        message: '用户添加成功'
                    }
                });
            });
        } else {
            updateStudentAPI(id, stuInfo).then(() => {
                navigate('/home', {
                    state: {
                        type: 'success',
                        message: '用户编辑成功'
                    }
                });
            });
        }
    }

    return (
        <div className='container'>
            <h1 className='page-header'>{id ? '编辑' : '添加'}用户</h1>
            <form onSubmit={onSubmitForm}>
                <div className='form-group'>
                    <label htmlFor='exampleInputName'>姓名</label>
                    <input
                        type='text'
                        className='form-control'
                        id='exampleInputName'
                        placeholder='请输入'
                        value={stuInfo.name}
                        onChange={(e) => updateStuInfo(e.target.value, 'name')}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='exampleInputName'>年龄</label>
                    <input
                        type='text'
                        className='form-control'
                        id='exampleInputName'
                        placeholder='请输入'
                        value={stuInfo.age}
                        onChange={(e) => updateStuInfo(e.target.value, 'age')}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='exampleInputName'>电话</label>
                    <input
                        type='text'
                        className='form-control'
                        id='exampleInputName'
                        placeholder='请输入'
                        value={stuInfo.phone}
                        onChange={(e) => updateStuInfo(e.target.value, 'phone')}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='exampleInputName'>邮箱</label>
                    <input
                        type='text'
                        className='form-control'
                        id='exampleInputName'
                        placeholder='请输入'
                        value={stuInfo.email}
                        onChange={(e) => updateStuInfo(e.target.value, 'email')}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='exampleInputName'>学历</label>
                    <input
                        type='text'
                        className='form-control'
                        id='exampleInputName'
                        placeholder='请输入'
                        value={stuInfo.education}
                        onChange={(e) => updateStuInfo(e.target.value, 'education')}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='exampleInputName'>毕业院校</label>
                    <input
                        type='text'
                        className='form-control'
                        id='exampleInputName'
                        placeholder='请输入'
                        value={stuInfo.graduationsSchool}
                        onChange={(e) =>
                            updateStuInfo(e.target.value, 'graduationsSchool')
                        }
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='exampleInputName'>专业</label>
                    <input
                        type='text'
                        className='form-control'
                        id='exampleInputName'
                        placeholder='请输入'
                        value={stuInfo.profession}
                        onChange={(e) => updateStuInfo(e.target.value, 'profession')}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='exampleInputName'>个人简介</label>
                    <textarea
                        className='form-control'
                        cols='30'
                        rows='10'
                        value={stuInfo.profile}
                        onChange={(e) =>
                            updateStuInfo(e.target.value, 'profile')
                        }></textarea>
                </div>
                <button type='submit' className='btn btn-default'>
                    确认添加
                </button>
            </form>
        </div>
    );
}

export default Add;
