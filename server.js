const express = require("express");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");

const typesArray = loadFilesSync(path.join(__dirname, "*/**.graphql"));
const resolversArray = loadFilesSync(path.join(__dirname, "*/**.resolvers.js"));

async function startApolloServer(){
    const app = express();
    
    const schema = makeExecutableSchema({
        typeDefs: [typesArray],
        resolvers: resolversArray,
    });

    const server = new ApolloServer({
        schema
    });

    await server.start();
    server.applyMiddleware({app, path:"/app"});

    app.listen(3000, () => {
        console.log("Listening to 3000");
    });
}

startApolloServer();


