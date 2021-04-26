import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { DetailContainer, DetailContent } from './styles';
import PostWriteArea from './PostWriteArea';
import ProjectHeader from './ProjectHeader';
import PostCard from './PostCard';

const ProjectDetail = () => {
  const { posts } = useSelector((state) => state.project);

  return (
    <DetailContainer>
      <ProjectHeader />
      <DetailContent>
        <PostWriteArea />
        {posts.map((post, index) => <PostCard key={index} post={post} />)}
      </DetailContent>
    </DetailContainer>
  );
};

ProjectDetail.propTypes = {

};

export { ProjectDetail };
