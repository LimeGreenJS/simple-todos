# simple-todos
LimeGreenJS-enabled simple todos example

## Graphcool schema
```
type Task @model {
  id: ID! @isUnique
  createdAt: DateTime!
  title: String!
  description: String
}

type File @model {
  contentType: String!
  createdAt: DateTime!
  id: ID! @isUnique
  name: String!
  secret: String! @isUnique
  size: Int!
  updatedAt: DateTime!
  url: String! @isUnique
}

type User @model {
  createdAt: DateTime!
  id: ID! @isUnique
  updatedAt: DateTime!
  email: String @isUnique
  password: String
}
```

You need to enable all permissions for the Task model.
