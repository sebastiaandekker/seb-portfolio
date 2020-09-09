# Migration `20200909120001-migration`

This migration has been generated at 9/9/2020, 2:00:01 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Project" (
"id" SERIAL,
"name" text   NOT NULL ,
"type" text   NOT NULL ,
"year" integer   NOT NULL ,
"text" text   NOT NULL ,
"roles" text []  ,
PRIMARY KEY ("id")
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200909120001-migration
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,24 @@
+datasource DS {
+  // optionally set multiple providers
+  // example: provider = ["sqlite", "postgresql"]
+  provider = ["postgresql"]
+  url = "***"
+}
+
+generator client {
+  provider      = "prisma-client-js"
+  binaryTargets = "native"
+}
+
+// Define your own datamodels here and run `yarn redwood db save` to create
+// migrations for them.
+model Project {
+  id    Int      @id @default(autoincrement())
+  name  String
+  type  String
+  year  Int
+  text  String
+  // Scalar list support has been removed for MySQL and SQLite.
+  // For PostgreSQL, Prisma is now using PostgreSQL native scalar lists(arrays) under the hood.
+  roles String[]
+}
```


