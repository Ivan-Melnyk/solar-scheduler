# Solar Scheduler
Solar Scheduler, designed for FOX ESS, uses [FOX ESS CLOUD Open API](https://www.foxesscloud.com/public/i18n/en/OpenApiDocument.html).

Stack of technologies: Cloudflare Durable Objects with Workers and SQLite storage, TypeScript.

These scripts helps to automate the Solar Scheduler of the FOX ESS (to be extended to support different solar vendors), so the batteries are automatically charged during the time of the chiepest grid tarrifs if no enough sun on the sky next day to charge the batteries from PV.

# Userful Commands
Add Secret to Cloudflare Secret Store:
```bash
npx wrangler secrets-store create <SecretStoreID> --name <SecretName> --scope workers --remote
```
