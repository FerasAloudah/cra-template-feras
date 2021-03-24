import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Text } from '@chakra-ui/react';

const NotFound: React.FC = () => {
  const { t } = useTranslation('translation');
  return (
    <Box>
      <Text fontSize="xl" textAlign="center">
        {t('not_found.title')}
      </Text>
      <Text fontSize="lg" textAlign="center">
        {t('not_found.description')}
      </Text>
    </Box>
  );
};

export default NotFound;
