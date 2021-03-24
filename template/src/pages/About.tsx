import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from '@chakra-ui/react';

const About: React.FC = () => {
  const { t } = useTranslation('translation');
  return (
    <Text fontSize="xl" textAlign="center">
      {t('about')}
    </Text>
  );
};

export default About;
