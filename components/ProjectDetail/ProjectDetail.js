import React from 'react';
import PropTypes from 'prop-types';
import { DetailContainer, DetailContent } from './styles';
import PostWriteArea from './PostWriteArea';
import ProjectHeader from './ProjectHeader';

const ProjectDetail = () => (
  <DetailContainer>
    <ProjectHeader />
    <DetailContent>
      <PostWriteArea />
    </DetailContent>
  </DetailContainer>
);

ProjectDetail.propTypes = {

};

export { ProjectDetail };
