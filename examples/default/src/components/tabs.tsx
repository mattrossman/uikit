import { Text, Container } from '@react-three/uikit'
import { Button } from '@/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/card'
import { Label } from '@/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/tabs'

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" width={400}>
      <TabsList width="100%">
        <TabsTrigger flexGrow={1} value="account">
          <Text>Account</Text>
        </TabsTrigger>
        <TabsTrigger flexGrow={1} value="password">
          <Text>Password</Text>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>
              <Text>Account</Text>
            </CardTitle>
            <CardDescription>
              <Text>Make changes to your account here. Click save when you're done.</Text>
            </CardDescription>
          </CardHeader>
          <CardContent gap={8}>
            <Container gap={4}>
              <Label>
                <Text>Name</Text>
              </Label>
              <Text>Pedro Duarte</Text>
            </Container>
            <Container gap={4}>
              <Label>
                <Text>Username</Text>
              </Label>
              <Text>@peduarte</Text>
            </Container>
          </CardContent>
          <CardFooter>
            <Button>
              <Text>Save changes</Text>
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>
              <Text>Password</Text>
            </CardTitle>
            <CardDescription>
              <Text>Change your password here. After saving, you'll be logged out.</Text>
            </CardDescription>
          </CardHeader>
          <CardContent gap={8}>
            <Container gap={4}>
              <Label>
                <Text>Current password</Text>
              </Label>
              <Text>password</Text>
            </Container>
            <Container gap={4}>
              <Label>
                <Text>New password</Text>
              </Label>
              <Text>password</Text>
            </Container>
          </CardContent>
          <CardFooter>
            <Button>
              <Text>Save password</Text>
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
