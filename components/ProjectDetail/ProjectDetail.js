import React from 'react';
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
      <PostCard view />
    </DetailContent>
  </DetailContainer>
);

ProjectDetail.propTypes = {

};

export { ProjectDetail };
