import React,{ useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import data from '../data';
import "./Messages.css"

function Messages() {
  const { messagesData } = data;

  const [input, setInput] = useState('');
  const [sort, setSort] = useState(messagesData);

  function SearchButton() {
    return (
      <IconButton>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          x='0px'
          y='0px'
          width='20'
          height='20'
          viewBox='0 0 30 30'
        >
          <path d='M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z'></path>
        </svg>
      </IconButton>
    );
  }
  function inputHandle(e) {
    setInput(e.target.value.toLowerCase());
  }

  useEffect(() => {
    const newData = messagesData.filter((item) => {
      const name = item.name.toLowerCase();
      return name.search(input) >= 0;
    });
    setSort(newData);
  }, [input, messagesData]);

  return (
    <div className='messages'>
      <div className='mes_Heading'>
        <div className='mes_text'>
          <p className='mes_subtext'>Messages</p>{' '}
          <Chip label='6' color='primary' style={{backgroundColor:'orange'}} size='small' />
        </div>
        <Paper
          component='form'
          elevation={0}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <SearchButton/>
          <InputBase
            placeholder='Search'
            value={input}
            onChange={(e) => {
              inputHandle(e);
            }}
          />
        </Paper>
      </div>

      <div className='mes_lists'>
         {
          sort.map((message) => {
            const { id, name, avatar, recentmsg, totalmsgs } = message;
            return (
              <div className='mes_content' key={id}>
                <div className='user_detail'>
                  <Avatar src={avatar} sx={{ height: '60px', width: '60px' }} />
                  <div className='user_Details'>
                    <p className='name'>{name}</p>
                    <p className='same1' >
                      {recentmsg}
                    </p>
                  </div>
                </div>
                <div className='number'>
                  <p className='same'>3:32pm</p>
                  <Chip label={totalmsgs ? totalmsgs : 'Your turn'}
                    color='primary' style={{backgroundColor:'#c7f3fc',color:'black'}}
                    size='small'
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Messages;