using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;



namespace ASP.NETCoreWebApplication.Models {
    public class Device {

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        public string Name { get; set; }
    }
}