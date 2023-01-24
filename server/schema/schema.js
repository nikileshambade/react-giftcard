const graphql = require('graphql');
const dummy = require('../data/dummy.json');

const { userData } = dummy;

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLList
} = graphql;

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: {
                id: { type: GraphQLString }
            },
            resolve(parent, args) {
                // code to get data from db / other source
                const { id } = args;
                const user = userData.find(item => item.id === id);
                return user; 
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve:(parent, args) => {
                return userData;
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});