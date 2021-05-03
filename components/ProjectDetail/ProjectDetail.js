import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DetailContainer, DetailContent } from './styles';
import PostWriteArea from './PostWriteArea';
import ProjectHeader from './ProjectHeader';
import PostCard from './PostCard';

const ProjectDetail = ({ projectPosts }) => {
  console.log('projectPosts', projectPosts);
  return (
    <DetailContainer>
      <ProjectHeader />
      <DetailContent>
        <PostWriteArea />
        {projectPosts.map((post, index) => (
          <PostCard key={post.id} post={post} />
        ))}
      </DetailContent>
    </DetailContainer>
  );
};

ProjectDetail.propTypes = {};

export { ProjectDetail };
