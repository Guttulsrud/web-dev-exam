using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;



namespace ASP.NETCoreWebApplication.Models {
    public class User {
        
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        public string Name { get; set; }
        
        public string Username { get; set; }
        
        public string Password { get; set; }

        public string Image { get; set; }
        
        public string Privileges { get; set; }
    }
}