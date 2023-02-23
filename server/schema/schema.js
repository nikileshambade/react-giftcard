const graphql = require('graphql');
const { WidgetType } = require('./widget_schema');
const dummy = require('../data/dummy.json');
const widgetData = require('../data/widget.json').widget;
const { ObjectType } = require('./any_object');
const { userData } = dummy;

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
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
            resolve:(parent, args) => {
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
        },
        getWidgetInfo: {
            type: WidgetType,
            resolve: (parent, args) => {
                return widgetData;
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        updateWidget:{
            type: WidgetType,
            args: {
                initial_json: { type: ObjectType }
            },
            resolve: (parent, args) => {
                widgetData.initial_json = args.initial_json;
                return widgetData;
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});