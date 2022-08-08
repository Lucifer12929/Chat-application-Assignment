import React from 'react';
import data from '../data';
import "./Connection.css"
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';

function Connection() {
  const { ConnectionsData } = data;

  return (
    <div className='newConnections'>
      <div className='conn_Heading'>
        <p className='conn_subheading'>New Connections</p>{' '}
        <Chip label='5' color='primary' style={{backgroundColor:'orange'}} size='small' />
      </div>
      <div className='conn_list1'>
      <div className='conn_list'>
        {ConnectionsData.map((item) => {
          const { id, name, avatar } = item;
          return (
            <div className='conn_user' key={id}>
              <Avatar
                src={avatar}
                size='large'
                sx={{ height: '60px', width: '55px' }}
              />
              <p className='user_name'>{name}</p>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
}
export default Connection;