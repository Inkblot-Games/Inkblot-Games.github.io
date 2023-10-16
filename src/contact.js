

import Contact from "./Contact.svelte";

const app = new Contact({
  target: document.body,
  props: {
    name: "Contact",
  },
});

export default app;