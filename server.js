import {ApolloServer} from '@apollo/server';

const typeDefs=`#graphql
type Query{
    greeting:String
}
`;

const resolvers={

    Query:{
        greeting: ()=>'Hello world',
    },
}

const server = new ApolloServer