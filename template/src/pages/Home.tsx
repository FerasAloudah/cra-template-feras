import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from '@chakra-ui/react';

const Home: React.FC = () => {
  const { t } = useTranslation('translation');
  return (
    <Text fontSize="xl" textAlign="center">
      {t('home')}
    </Text>
  );
};

export default Home;
