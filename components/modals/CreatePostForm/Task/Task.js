import React from 'react';
import useInput from '../../../../hooks/useInput';
// import {} from './styles';
import PostCard from '../../../ProjectDetail/PostCard';

const Task = () => {
  const [taskTitle, onChangeTaskTitle] = useInput('');
  return (
    <form>
      <PostCard write />
    </form>
  );
};

export default Task;
