import React from 'react';
import {useRouter} from 'next/router';
import AppLayout from '../../components/layout/AppLayout';


const Detail = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <AppLayout>
      {id}
    </AppLayout>
  );
};



export default Detail;
