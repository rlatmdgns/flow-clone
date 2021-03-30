import React from 'react';
import { useRouter } from 'next/router';
import AppLayout from '../../components/layout/AppLayout';
import ProjectDetail from '../../components/ProjectDetail';

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <AppLayout>
      <ProjectDetail />
    </AppLayout>
  );
};

export default Detail;
