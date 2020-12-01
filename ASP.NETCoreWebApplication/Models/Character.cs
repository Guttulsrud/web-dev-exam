using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;



namespace ASP.NETCoreWebApplication.Models {
    public class Character {
        
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        public string Name { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public string Game { get; set; }
    }
}