import React from 'react';
import PropTypes from 'prop-types';
import { DetailContainer, DetailContent } from './styles';
import PostWriteArea from './PostWriteArea';

const ProjectDetail = () => (
  <DetailContainer>
    <DetailContent>
      <PostWriteArea />
    </DetailContent>
  </DetailContainer>
);

ProjectDetail.propTypes = {

};

export { ProjectDetail };
