using System;
using MongoDB.Driver;
using ASP.NETCoreWebApplication.Models;
using System.Linq;
using System.Collections.Generic;

namespace ASP.NETCoreWebApplication.Services {
    public class UsersService {
        private readonly IMongoCollection<User> _users;

        public UsersService(DatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DataBaseName);
            _users = database.GetCollection<User>(settings.UserCollectionName);
        }

        public List<User> Get()
        {
            return _users.Find(user => true).ToList();
        }

        public User Get(string id)
        {
            return _users.Find(user => user.Id == id).SingleOrDefault();
        }
        
        public User GetUserByUsername(string username)
        {
            return _users.Find(user => user.Username == username).SingleOrDefault();
        }
        
        public User Create(User user){
            _users.InsertOne(user);
            return user;
        }

        public void Remove(string id){
            _users.DeleteOne( user => user.Id == id );
        }

        public void Update(User userIn )
        {
            _users.ReplaceOne( user => user.Id == userIn.Id, userIn );
        }
    }
}