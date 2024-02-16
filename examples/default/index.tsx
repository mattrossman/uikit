import { StrictMode } from "react";
import { Canvas } from "@react-three/fiber";
import { createRoot } from "react-dom/client";
import { DefaultProperties, Fullscreen, Text, Container } from "@react-three/uikit";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/accordion.js";
import { AlertCircle, BellRing, Check, ChevronRight, Terminal } from "@react-three/uikit-lucide";
import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@/alert.js";
import { DefaultColors, colors } from "@/defaults.js";
import { Avatar } from "@/avatar.js";
import { Badge } from "@/badge.js";
import { Button } from "@/button.js";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/card.js";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

function App() {
  return (
    <Canvas style={{ height: "100dvh", touchAction: "none" }} gl={{ localClippingEnabled: true }}>
      <color attach="background" args={["black"]} />
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0} position={[5, 1, 10]} />
      <Fullscreen
        scrollbarColor="black"
        backgroundColor="white"
        alignItems="center"
        justifyContent="center"
        padding={32}
      >
        <Container flexDirection="row" justifyContent="center" width="100%" maxWidth={500}>
          <DefaultColors>
            <CardDemo />
          </DefaultColors>
        </Container>
      </Fullscreen>
    </Canvas>
  );
}
const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

export function CardDemo() {
  return (
    <Card width={380}>
      <CardHeader>
        <CardTitle>
          <Text>Notifications</Text>
        </CardTitle>
        <CardDescription>
          <Text>You have 3 unread messages.</Text>
        </CardDescription>
      </CardHeader>
      <CardContent flexDirection="column" gap={16}>
        <Container flexDirection="row" alignItems="center" gap={16} borderRadius={6} border={1} padding={16}>
          <BellRing />
          <Container gap={4}>
            <Text fontSize={14} lineHeight={1}>
              Push Notifications
            </Text>
            <Text fontSize={14} lineHeight={1.43} color={colors.mutedForeground}>
              Send notifications to device.
            </Text>
          </Container>
        </Container>
        <Container>
          {notifications.map((notification, index) => (
            <Container
              key={index}
              marginBottom={index === notifications.length - 1 ? 0 : 16}
              paddingBottom={index === notifications.length - 1 ? 0 : 16}
              alignItems="flex-start"
              flexDirection="row"
              gap={17}
            >
              <Container
                height={8}
                width={8}
                transformTranslateY={4}
                borderRadius={1000}
                backgroundColor={0x0ea5e9}
              />
              <Container gap={4}>
                <Text fontSize={14} lineHeight={1}>
                  {notification.title}
                </Text>
                <Text fontSize={14} lineHeight={1.43} color={colors.mutedForeground}>
                  {notification.description}
                </Text>
              </Container>
            </Container>
          ))}
        </Container>
      </CardContent>
      <CardFooter>
        <Button flexDirection="row" width="100%">
          <Check marginRight={8} height={16} width={16} /><Text>Mark all as read</Text>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function ButtonDemo() {
  return (
    <Button variant="outline" size="icon">
      <ChevronRight width={16} height={16} />
    </Button>
  );
}

export function BadgeDemo() {
  return (
    <Badge>
      <Text>Badge</Text>
    </Badge>
  );
}

export function AvatarDemo() {
  return (
    <Container alignItems="center">
      <Avatar src="https://picsum.photos/100/100" />
    </Container>
  );
}

export function AlertDemo() {
  return (
    <Alert>
      <AlertIcon>
        <Terminal width={16} height={16} />
      </AlertIcon>
      <AlertTitle>
        <Text>Error</Text>
      </AlertTitle>
      <AlertDescription>
        <Text>You can add components to your app using the cli.</Text>
      </AlertDescription>
    </Alert>
  );
}

//TODO: type="single" collapsible
export function AccordionDemo() {
  return (
    <Accordion>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <Text>Is it accessible?</Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text>Yes. It adheres to the WAI-ARIA design pattern.</Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <Text>Is it styled?</Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text>
            Yes. It comes with default styles that matches the other components&apos; aesthetic.
          </Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          <Text>Is it animated?</Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text>Yes. It&apos;s animated by default, but you can disable it if you prefer.</Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
