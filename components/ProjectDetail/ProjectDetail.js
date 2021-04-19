import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DetailContainer, DetailContent } from './styles';
import PostWriteArea from './PostWriteArea';
import ProjectHeader from './ProjectHeader';
import PostCard from './PostCard';

const ProjectDetail = () => (
  <DetailContainer>
    <ProjectHeader />
    <DetailContent>
      <PostWriteArea />
      <PostCard />
      <PostCard />
      <PostCard />
    </DetailContent>
  </DetailContainer>
);

ProjectDetail.propTypes = {

};

export { ProjectDetail };
