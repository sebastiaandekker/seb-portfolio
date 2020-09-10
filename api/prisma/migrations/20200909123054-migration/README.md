# Migration `20200909123054-migration`

This migration has been generated at 9/9/2020, 2:30:54 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Project" ADD COLUMN "client" text   NOT NULL 
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200909120001-migration..20200909123054-migration
--- datamodel.dml
+++ datamodel.dml
@@ -1,9 +1,9 @@
 datasource DS {
   // optionally set multiple providers
   // example: provider = ["sqlite", "postgresql"]
   provider = ["postgresql"]
-  url = "***"
+  url = "***"
 }
 generator client {
   provider      = "prisma-client-js"
@@ -12,13 +12,14 @@
 // Define your own datamodels here and run `yarn redwood db save` to create
 // migrations for them.
 model Project {
-  id    Int      @id @default(autoincrement())
-  name  String
-  type  String
-  year  Int
-  text  String
+  id     Int      @id @default(autoincrement())
+  name   String
+  type   String
+  year   Int
+  text   String
+  client String
   // Scalar list support has been removed for MySQL and SQLite.
   // For PostgreSQL, Prisma is now using PostgreSQL native scalar lists(arrays) under the hood.
-  roles String[]
+  roles  String[]
 }
```


