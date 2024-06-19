import { Container, Text, VStack, Box, Button, Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box as="nav" width="100%" p={4} display="flex" justifyContent="space-between" alignItems="center">
        <Text fontSize="2xl" fontWeight="bold">Kive</Text>
        <Box display="flex" alignItems="center">
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Product
            </MenuButton>
            <MenuList>
              <MenuItem>Library</MenuItem>
              <MenuItem>Generate</MenuItem>
              <MenuItem>Search</MenuItem>
              <MenuItem>Moodboards</MenuItem>
              <MenuItem>Stories</MenuItem>
              <MenuItem>Video</MenuItem>
            </MenuList>
          </Menu>
          <Button variant="link" ml={4}>Solutions</Button>
          <Button variant="link" ml={4}>Pricing</Button>
          <Button variant="link" ml={4}>Careers</Button>
          <Button variant="link" ml={4}>Log in</Button>
          <Button colorScheme="blackAlpha" ml={4}>Sign up</Button>
        </Box>
      </Box>
      <VStack spacing={4} textAlign="center">
        <Text fontSize="4xl" fontWeight="bold">Where creative AI gets to work</Text>
        <Text fontSize="lg">Kive is the all-in-one platform to generate ideas, produce professional content, organise assets and build brands with AI.</Text>
        <Button colorScheme="blackAlpha" size="lg">Get started</Button>
      </VStack>
    </Container>
  );
};

export default Index;