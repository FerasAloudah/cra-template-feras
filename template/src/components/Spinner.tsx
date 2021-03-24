import * as React from 'react';

import { Center, Spinner as ChakraSpinner, SpinnerProps, useColorModeValue } from '@chakra-ui/react';

const Spinner: React.FC<Partial<SpinnerProps>> = (props) => {
  const { h = '50vh' } = props;
  const color = useColorModeValue('gray.800', 'white');
  return (
    <Center h={h} w="full">
      <ChakraSpinner color={color} label="Loading" size="xl" zIndex={10} {...props} />
    </Center>
  );
};

export default Spinner;
