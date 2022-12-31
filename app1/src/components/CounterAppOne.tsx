import { Text, Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Counter = () => {
  const [count, setCount] = useState(0);

  const location = useLocation();

  return (
    <Flex color="#000" gap="1rem" direction="column">
      <Text>Click count : {count} </Text>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
      {location.pathname !== "/" && (
        <Button as={Link} to="/">
          Back to container
        </Button>
      )}
    </Flex>
  );
};

export default Counter;
