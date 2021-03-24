import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Button, Flex, HStack, Spacer } from '@chakra-ui/react';

import ColorModeSwitcher from './ColorModeSwitcher';

const Header: React.FC = () => {
  const { i18n, t } = useTranslation('translation');
  const isRTL = i18n.dir() === 'rtl';

  const toggleLanguage = () => {
    const lang = isRTL ? 'en' : 'ar';
    i18n.changeLanguage(lang).then(() => {
      document.documentElement.setAttribute('dir', i18n.dir());
      document.documentElement.setAttribute('lang', lang);
    });
  };

  return (
    <Flex
      as="header"
      borderBottomColor={{ base: 'red.500', sm: 'teal.500' }}
      borderBottomWidth={2}
      justify="center"
      mb={10}
      px={10}
      py={2}
      w="full"
    >
      <HStack spacing={7}>
        <Link to="/">{t('home')}</Link>
        <Link to="/about">{t('about')}</Link>
      </HStack>
      <Spacer />
      <HStack spacing={5}>
        <Button onClick={toggleLanguage} variant="ghost">
          {isRTL ? 'English' : 'العربيه'}
        </Button>
        <ColorModeSwitcher />
      </HStack>
    </Flex>
  );
};

export default Header;
