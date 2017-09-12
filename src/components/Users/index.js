import React from 'react'
import {actions} from 'mirrorx'
import {Table, Pagination, Popconfirm, Button} from 'antd'
import {PAGE_SIZE} from '../../constants'
import UserModal from '../UserModal'
import './style.less'

const Users = ({list: dataSource, loading, total, page: current}) => {

  const {create, remove, edit} = actions.users

  const onPageChange = page => actions.routing.push({
    path: '/users',
    search: `?page=${page}`
  })

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="">{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Website',
      dataIndex: 'website',
      key: 'website',
    },
    {
      title: 'Operation',
      key: 'operation',
      render: (text, record) => (
        <span className="operation">
          <UserModal record={record} onOk={edit}>
            <a>Edit</a>
          </UserModal>
          <Popconfirm title="Confirm to delete?" onConfirm={remove.bind(null, record.id)}>
            <a href="">Delete</a>
          </Popconfirm>
        </span>
      ),
    },
  ]

  return (
    <div className="normal">
      <div>
        <div className="create">
          <UserModal record={{}} onOk={create}>
            <Button type="primary">Add User</Button>
          </UserModal>
        </div>
        <Table
          columns={columns}
          dataSource={dataSource}
          loading={loading}
          rowKey={record => record.id}
          pagination={false}
        />
        <Pagination
          className="ant-table-pagination"
          total={total}
          current={current}
          pageSize={PAGE_SIZE}
          onChange={onPageChange}
        />
      </div>
    </div>
  )
}

export default Users
