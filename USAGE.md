<!-- Start SDK Example Usage [usage] -->
```typescript
import { Panora } from "panora-ts";

const panora = new Panora({
    jwt: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await panora.appControllerHello();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->