# AUTH MICROSERVICE

### To init a sequelize use the below command

```
npx sequelize init

```

### To create a database :-

```
npx sequelize db:create

```

### To creare a model :-

```
    Query :- npx sequelize model:generate --name <model_name> --atrribbutes <attributeName:datatype>

    Ex : npx sequelize model:generate --name User --attributes email:String,password:String
```

### to migrate a model :-

```
   Query : npx sequelize db:migrate
```
