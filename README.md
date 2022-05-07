# A simple Accordion component for Next.js

## Usage

```jsx
// index.tsx
import type { NextPage } from "next";
import Accordion from "../components/accordion.component";

const Home: NextPage = () => {
  const content = {
    items: [
      { title: "First Item", content: "Simple string content" },
      {
        title: "Second Item (a JSX element)",
        content: (
          <ul>
            <li>Hello</li>
            <li>World</li>
          </ul>
        ),
      },
      { title: "Third Item", content: "More strings!!" },
    ],
  };
  return <Accordion content={content} />;
};

export default Home;
```

