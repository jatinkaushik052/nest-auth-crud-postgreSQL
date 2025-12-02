🚀 NestJS CRUD + PostgreSQL + JWT Authentication

A complete NestJS Starter Project including:

✔ CRUD Operations

✔ DTO + Class Validator

✔ TypeORM + PostgreSQL

✔ JWT Authentication (Login / Signup)

✔ Protected Routes using AuthGuard

✔ Modular Architecture (AuthModule + UsersModule)

📦 Tech Stack
Feature	Library
Framework	NestJS
Database	PostgreSQL
ORM	TypeORM
Validation	class-validator, class-transformer
Authentication	JWT + Passport
Password Hashing	bcryptjs

📁 Project Structure
src
│── auth
│   │── auth.controller.ts
│   │── auth.service.ts
│   │── auth.module.ts
│   │── strategies
│   │     └── jwt.strategy.ts
│
│── users
│   │── users.controller.ts
│   │── users.service.ts
│   │── users.module.ts
│   │── user
│   │     └── user.entity.ts
│
│── app.module.ts
└── main.ts
