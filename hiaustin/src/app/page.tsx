'use client'

import { Box, Container, Heading, Text, Flex, Button } from "@radix-ui/themes";
import { useTheme } from "./components/theme-provider";
import Link from 'next/link'

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <Box>
      <Container size="2">
        <Flex direction="column" gap="4" py="9">
          <Heading size="8">Experiments</Heading>
          <Text size="5">
            Built with Next.js and Radix UI
          </Text>
          <Button 
            size="3" 
            variant="soft"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
          </Button>
          <Link href="/experiments/test1" className="your-class-name">
            Test Experiment 1
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
